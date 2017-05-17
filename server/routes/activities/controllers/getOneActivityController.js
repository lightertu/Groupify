const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }
    // save a new activity to to the database
    if (!validateInput()) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

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

