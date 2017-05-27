/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;
const ParticipantValidator = require("../../../../models").ParticipantValidator;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

const properties = ['name', 'image', 'skills', 'availability'];


function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params) && validateFormat(payload, properties)
        && ParticipantValidator(payload.name, payload.image, payload.skills, payload.availability);
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
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const userId = req.user._id;
    const payload = req.body;
    const activityId = req.params.activityId;



    // save a new activity to the database
    const newParticipant = new Participant({
        _creator: userId,
        _activity: activityId,
        name: payload.name,
        image: payload.image,
        skills: payload.skills,
        availability: payload.availability,
    });

    newParticipant.save()
        .then(function (participant) {
            Activity.findOneAndUpdate(
                {_id: activityId, _creator: userId, isDeleted: false},
                {
                    $push: {
                        "participants": {_id: participant._id}
                    },
                    $set: {
                        "lastModifiedTime": Date.now()
                    }
                },
                {new: true}
            )
                .exec()
                .then(function (activity) {
                    if (activity === null) {
                        // synchronous
                        Participant.remove({_id: newParticipant._id}).exec();
                        const errorMessage = "Cannot find activity has id: " + activityId + " in which to create new participant";
                        return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
                    }

                    return res.json({
                        participant: participant.getPublicFields()
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
