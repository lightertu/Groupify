const validator = require('validator');
const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;


function validateInput(req) {
    return validateParameters(req.params);
}


function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && prm.hasOwnProperty('groupNumber')
        && typeof prm.activityId === 'string'
        && ObjectIdIsValid(prm.activityId)
        && validateParameterGroupNumber(prm.groupNumber);
}

function validateParameterGroupNumber(g){
    let result = (typeof g === 'string');
    if (result){
        let number = parseInt(g, 10);
        result = result && Number.isInteger(number) && number > -3;
    }
    return result;
}

module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct URL && the groupNumber should be >= -2';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const userId = req.user._id;
    const activityId = req.params.activityId;
    const groupNumber = parseInt(req.params.groupNumber, 10);
    console.log("GN")
    console.log(groupNumber)
    console.log("GN")

    Activity.findOneAndUpdate(
        {
            _id: activityId, _creator: userId, lockedGroups: {"$in": [groupNumber]}, isDeleted: false},
        {
            $pull: {
                "lockedGroups": groupNumber,
            },

            $set: {
                "lastModifiedTime": Date.now(),
            },
        },
        { new: true }
    )
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity has id: " + activityId +
                    ", or this activity doesn't have that locked groupNumber: " + groupNumber;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.json({
                activity: activity.getPublicFields()
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

};
