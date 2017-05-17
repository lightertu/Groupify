/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils.js").createErrorHandler;
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }
    // save a new activity to to the database
    if (!validateInput()) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
    }

    Participant.findOneAndUpdate(
        {
            _id: req.params.participantId,
            _activity: req.params.activityId,
            _creator: req.user._id,
            isDeleted: false
        },
        {
            $set: {
                "lastModifiedTime": Date.now(),
                "isDeleted": true,
            }
        },
        {new: true}
    )

        .exec()

        .then(function (participant) {
            if (participant === null) {
                const errorMessage = "Cannot find participant: " + req.params.participantId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            /* remove this item from User.activities array */
            Activity.findOneAndUpdate(
                {_id: participant._activity},
                {$pull: {'participants': participant._id}}
            )
                .exec()
                .then(function (activity) {
                    return res.json({
                        deletedParticipant: participant.getPublicFields()
                    });
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};