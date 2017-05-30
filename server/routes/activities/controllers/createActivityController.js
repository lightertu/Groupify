const validator = require('validator');
const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const User = require("../../../models/").User;
const Activity = require("../../../models/").Activity;
const ActivityValidator = require("../../../models/").ActivityValidator;
const Survey = require("../../../models").Survey;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['name', 'groupCapacity', 'totalCapacity', 'endDate', 'surveyId'];


function validateInput(payload) {
    return validateFormat(payload, properties)
        && ActivityValidator(payload.name, payload.groupCapacity,
            payload.totalCapacity, payload.endDate)
        && validateSurveyId(payload.surveyId);
}

function validateSurveyId(surveyId){
    return typeof surveyId === 'string' && ObjectIdIsValid(surveyId);
}

function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;

    if (!validateInput(payload)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }
    

    // first find survey by surveyId
    Survey.findOne(
        { _id: payload.surveyId}
    ).exec()
        .then(function (survey){
            if (survey === null){
                const errorMessage = "Cannot find survey has id: " + payload.surveyId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            // then save the activity and add the activityId in user
            const newActivity = new Activity({
                _creator: userId,
                name: payload.name,
                groupCapacity: payload.groupCapacity,
                totalCapacity: payload.totalCapacity,
                endDate: payload.endDate,
                survey: survey,
            });

            newActivity.save().then(function (newActivity) {
                const newActivityId = newActivity._id;
                    User.findOneAndUpdate(
                        {_id: userId},
                        {
                            // add activity id to user.activities
                            $push: {
                                "activities": {_id: newActivityId}
                            },

                            // set the last modified date
                            $set: {
                                "lastModifiedTime": Date.now()
                            }
                        })
                        .exec()
                        .then(function (user) {
                            return res.status(HttpStatus.OK).json({
                                activity: newActivity.getPublicFields()
                            })
                        })
                        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

};
