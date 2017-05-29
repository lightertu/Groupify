/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const Participant = require("../../../../models/").Participant;
const ParticipantValidator = require("../../../../models").ParticipantValidator;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

// const properties = ['name', 'image', 'skills', 'availability'];
const properties = ['name', 'image', 'email', 'surveyResponses'];


function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params) && validateFormat(payload, properties)
        && ParticipantValidator(payload.name, payload.email, payload.image, payload.surveyResponses);
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
        const errorMessage = 'please give valid activityID in URL and correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const payload = req.body;
    const activityId = req.params.activityId;


    // check if the activity is full. If so, then no other one can participate in
    Activity.findOne({_id: activityId, isDeleted: false})
        .exec()
        .then(function (activity){
            if (activity === null){
                const errorMessage = "Cannot find activity has id: " + activityId + " in which to create new participant";
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            if (activity.totalCapacity <= activity.currentCapacity){
                const errorMessage = "The activity is full, no other one can participate in";
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            // save a new participant
            const newParticipant = new Participant({
                _activity: activityId,
                email: payload.email,
                name: payload.name,
                image: payload.image,
                surveyResponses: payload.surveyResponses,
            });
            newParticipant.save()
                .then(function(participant){

                    // update activity
                    activity.participants.push({_id: participant.id});
                    activity.lastModifiedTime = Date.now();
                    activity.currentCapacity ++;

                    activity.save().then(function(act){
                        return res.status(HttpStatus.CREATED).json({
                            participant: participant.getPublicFields()
                        })
                    }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));


        }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

};
