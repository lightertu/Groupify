const HttpStatus = require("http-status-codes");
const Activity = require("../../../models/").Activity;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;

module.exports = function (req, res, next) {
    const activityId = req.params.activityId,
        userId = req.user._id;


    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }

    if (!validateInput()) {

    }

    Activity.findOneAndUpdate(
        {_id: activityId, _creator: userId},
        {
            $set: {
                "isDeleted": true,
            }
        },
        {new: true}
    ).exec()
        .then(function (activity) {
            /* if this activity is not found */
            if (activity === null) {
                const errorMessage = "Cannot find activity has id " + req.params.activityId + " to delete";
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            /* remove this item from User.activities array */
            User.findOneAndUpdate(
                {_id: userId},
                {$pull: {'activities': activityId}},
                {new: true}
            ).exec().then(function (user) {
                return res.json({
                    activity: activity
                });
            })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
