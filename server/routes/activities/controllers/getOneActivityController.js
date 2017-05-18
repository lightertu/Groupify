const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");


function validateInput(req) {
    return validateParameters(req.params);
}

// TODO: MAY THINK FURTHOR HERE
function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string';
}


module.exports = function (req, res, next) {

    if (!validateInput(req)) {
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

