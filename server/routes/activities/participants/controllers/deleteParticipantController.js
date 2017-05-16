/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    Participant.findOneAndUpdate(
        {_id: req.params.participantId, _activity: req.params.activityId, _creator: req.user._id, isDeleted: false},
        {
            // TODO: more changes can be added
            $set: {
                "lastModifiedTime": Date.now(),
                "isDeleted": true,
            }
        }
    )

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
            message: "successfully deleted: " + participant.name
        })
    })

    .catch(function (err) {
        // TODO: set http status code system error
        console.log(err)
        return res.json({
            success: false,
            error: err,
        })
    })
};