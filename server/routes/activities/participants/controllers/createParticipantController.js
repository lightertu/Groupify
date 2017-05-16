/**
 * Created by rui on 5/16/17.
 */
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

function checkPayloadForCreate (payload) {
    return true
}

module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;
    const activityId = req.params.activityId;

    // save a new activity to to the database
    if (checkPayloadForCreate(payload)) {
        const newParticipant = new Participant({
            _creator: userId,
            _activity: activityId,
            name: payload.name,
            image: payload.image,
            skills: payload.skills,
            availability: payload.availability,
        });

        // TODO: a very big bug here, what is user and activity has been delete should
        newParticipant.save()
            .then(function (newParticipant) {
                Activity.findOneAndUpdate(
                    {_id: activityId, _creator: userId, isDeleted: false},
                    {
                        $push: {
                            "participants": {_id: newParticipant._id}
                        },
                        $set: {
                            "lastModifiedTime": Date.now()
                        }
                    })
                    .exec()

                    .then(function (activity) {
                        console.log("successfully added a new participant to activity");

                        if (activity === null) {
                            return res.json({
                                success: true,
                                message: 'the activities cannot be found'
                            })
                        }

                        return res.json({
                            success: true,
                            message: 'add participant success'
                        })
                    })

                    .catch(function (err) {
                        // TODO: set http status
                        console.log(err);
                        return res.json({
                            success: false,
                            message: err
                        })
                    })

            })

            // add the new activityId to user
            .catch(function (err) {
                // TODO: choose a status code
                return res.json({
                    success: false,
                    message: err
                })
            })
    } else {
        // TODO: choose a status code
        res.json({
            success: false,
            message: 'please give the correct payload',
        })
    }
};