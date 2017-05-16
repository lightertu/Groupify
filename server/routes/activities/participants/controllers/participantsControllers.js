/**
 * Created by rui on 5/9/17.
 */

const Activity = require("../../../../models/").Activity
const User = require("../../../../models/").User
const Participant = require("../../../../models/").Participant

function checkPayloadForCreate (payload) {
    return true
}

module.exports = {
    getAllParticipantsController: function (req, res, next) {
        Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
            .populate({
                path: 'participants',
                //select: 'name groupCapacity totalCapacity endDate lastModified participants isDeleted',
                match: {isDeleted: false},
                options: {
                    sort:  { lastModifiedAt: 1 }
                }
            })
            .exec()
            .then(function (activity) {
                if (activity === null) {
                    // TODO: set http status code, resource not found
                    return res.json({
                        success: false,
                        message: "Cannot find activity: " + req.params.activityId,
                    })
                }

                return res.json({
                    success: true,
                    participants: activity.participants,
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
    },

    createParticipantController: function (req, res, next) {
        const userId = req.user._id
        const payload = req.body
        const activityId = req.params.activityId

        // save a new activity to to the database
        if (checkPayloadForCreate(payload)) {
            const newParticipant = new Participant({
                _creator: userId,
                _activity: activityId,
                name: payload.name,
                image: payload.image,
                skills: payload.skills,
                availability: payload.availability,
            })

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
                            console.log("successfully added a new participant to activity")

                            if (activity === null) {

                            }

                            return res.json({
                                success: true,
                                message: 'add participant success'
                            })
                        })

                        .catch(function (err) {
                            // TODO: set http status
                            console.log(err)
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
    },

    getOneParticipantController: function (req, res, next) {
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
                console.log(err)
                return res.json({
                    success: false,
                    error: err,
                })
            })
    },

    updateParticipantController: function (req, res, next) {
        Participant.findOneAndUpdate(
            {_id: req.params.participantId, _activity: req.params.activityId, _creator: req.user._id, isDeleted: false},
            {
                // TODO: more changes can be added
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
            console.log(err)
            return res.json({
                success: false,
                error: err,
            })
        })
    },

    deleteParticipantController: function (req, res, next) {
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
    },

    regroupParticipantsController: function (req, res, next) {
        res.send("regroup participants ")
    },
}
