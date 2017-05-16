/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils.js").createErrorHandler;
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    Participant.findOneAndUpdate(
        {_id: req.params.participantId, _activity: req.params.activityId, _creator: req.user._id, isDeleted: false},
        {
            // we have to check if the groupNumber is less than the number of groups
            $set: {
                "lastModifiedAt": Date.now(),
                "groupNumber": req.body.groupNumber,
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

            return res.json({
                success: true,
                participant: participant
            })
        })

        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
