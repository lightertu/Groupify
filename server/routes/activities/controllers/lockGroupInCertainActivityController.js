const validator = require('validator');
const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['groupNumber'];


function validateInput(req) {
    const payload = req.body;
    return validateFormat(payload, properties)
        && validateParameters(req.params)
        && validateGroupNumber(payload.groupNumber);
}


function validateGroupNumber (g) {
    return Number.isInteger(g) && g>-3;
}


function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string'
        && ObjectIdIsValid(prm.activityId);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload && URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const userId = req.user._id;
    const activityId = req.params.activityId;
    const groupNumber = req.body.groupNumber;

    console.log(groupNumber);

    Activity.findOneAndUpdate(
        {
            _id: activityId, _creator: userId, isDeleted: false},
        {
            $addToSet: {
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
                const errorMessage = "Cannot find activity has id: " + activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.json({
                activity: activity.getPublicFields()
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

};
