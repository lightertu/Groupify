/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
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

        /* remove this item from User.activities array */
        Activity.findOneAndUpdate(
            { _id: participant._activity },
            { $pull: { 'participants': participant._id } }
        ).exec().then(function(activity){
            return res.json({
                success: true,
                activity: activity
            });
        }).catch(function(err) {
            // TODO: set http header to resource not found
            console.log(err);
            return res.json({
                success: false,
                message: err,
            });
        });
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