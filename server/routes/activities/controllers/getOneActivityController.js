const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    Activity.findOne(
        {_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
        .select("name totalCapacity groupCapacity endDate participants")
        .exec()
        .then(function (activity) {
            if (activity !== null) {
                return res.json({
                    activity: activity
                });
            } else {
                const errorMessage = "Cannot find an activity has id " + req.params.activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};

