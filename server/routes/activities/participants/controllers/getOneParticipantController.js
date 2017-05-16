/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    // TODO: if ID is malformed, the system will give an error
    Participant.findOne({
        _id: req.params.participantId,
        _activity: req.params.activityId,
        _creator: req.user._id,
        isDeleted: false
    })
        .exec()
        .then(function (participant) {
            if (participant === null) {
                // TODO: set http status code, resource not found
                return res.json({
                    success: false,
                    message: "Cannot find participant: " + req.params.participantId,
                })
            }

            return res.json({
                success: true,
                participant: participant
            })
        })
        .catch(function (err) {
            // TODO: set http status code system error
            console.log(err);
            return res.json({
                success: false,
                error: err,
            })
        })
};