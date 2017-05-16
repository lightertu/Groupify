/**
 * Created by rui on 5/16/17.
 */
var HttpStatus = require("http-status-codes");
var createErrorHandler = require("../../../utils.js").createErrorHandler;
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
        .populate({
            path: 'participants',
            select: 'name image groupNumber availability skills lastModified',
            match: {isDeleted: false},
            options: {
                sort: {lastModifiedAt: 1}
            }
        })
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity: " + req.params.activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            return res.json({
                participants: activity.participants,
            })
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
