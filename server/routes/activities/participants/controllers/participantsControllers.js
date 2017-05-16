/**
 * Created by rui on 5/9/17.
 */

const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = {
    getAllParticipantsController: function(req, res, next) {
        Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
            .populate({
                path: 'participants',
                //select: 'name groupCapacity totalCapacity endDate lastModified participants isDeleted',
                match:  { isDeleted: false }
            })
            .exec()
            .then(function (activity) {
                if (activity === null) {
                    // TODO: set http status code, resource not found
                    return res.json({
                        success: false,
                        message: "Cannot find activity: " + req.params.activityId,
                    });
                }

                return res.json({
                    success: true,
                    participants: activity.participants,
                });
            })
            .catch(function (err) {
                // TODO: set http status code system error
                console.log(err);
                return res.json({
                    success: false,
                    error: err,
                });
            });
        },


    regroupParticipantsController: function(req, res, next) {
        res.send("regroup participants ");
    },

    createParticipantController: function(req, res, next) {
        res.send("created new participant");
    },

    getOneParticipantController: function(req, res, next) {
        console.log("activityId: " + req.params.activityId);
        console.log("participantId: " + req.params.participantId);
        res.send("get one participant");
    },

    updateParticipantController: function(req, res, next) {
        res.send("get one participant");
    },

    deleteParticipantController: function(req, res, next) {
        res.send("delete participant");
    },
};
