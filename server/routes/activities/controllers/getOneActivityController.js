const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false}).exec()
        .then(function (activity) {
            if (activity !== null) {
                return res.json({
                    activity: activity
                });
            } else {
                // TODO: set http header to resource not found
                return res.json({
                    error: "Cannot find an activity has id " + req.params.activityId,
                });
            }
        })

        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};

