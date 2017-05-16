/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

//TODO: check payload for create
function checkPayloadForCreate(payload) {
    return true
}

module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;
    const activityId = req.params.activityId;

    if (checkPayloadForCreate(payload)) {
        const errorMessage = 'please give the correct payload to create participant';
        return createErrorHandler(res, HttpStatus.UNPROCESSABLE_ENTITY)(errorMessage);
    }

    // save a new activity to the database
    const newParticipant = new Participant({
        _creator: userId,
        _activity: activityId,
        name: payload.name,
        image: payload.image,
        skills: payload.skills,
        availability: payload.availability,
    });

    // TODO: a very big bug here, what if user and activity has been delete should
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
                        const errorMessage = "Cannot find activity has id: " + activityId + " in which to create new participant";
                        return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
                    }

                    return res.json({
                        newParticipant: participant.getPublicFields()
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};