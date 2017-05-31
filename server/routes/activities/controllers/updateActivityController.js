const HttpStatus = require("http-status-codes");
const validator = require('validator');
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models/").Activity;
const ActivityValidator = require("../../../models/").ActivityValidator;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['title', 'groupCapacity', 'totalCapacity', 'endDate'];


function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params)
        && validateFormat(payload, properties)
        && ActivityValidator(payload.title, payload.groupCapacity,
            payload.totalCapacity, payload.endDate);
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
        const errorMessage = 'please give the valid activityID in url and correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }


    const activityId = req.params.activityId,
        userId = req.user._id;

    Activity.findOneAndUpdate(
        {
            _id: activityId, _creator: userId, isDeleted: false},
        {
            $set: {
                "title": req.body.title,
                "endDate": new Date(req.body.endDate),
                "totalCapacity": req.body.totalCapacity,
                "groupCapacity": req.body.groupCapacity,
            }
        },
        // this select the properties to show
        {
            projection: {
                "title": 1,
                "endDate": 1,
                "totalCapacity": 1,
                "groupCapacity": 1,
                "participants": 1,
            },
            new: true,
        }
    )
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity has id: " + activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.json({
                activity: activity
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
