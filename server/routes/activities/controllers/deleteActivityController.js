const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models/").Activity;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;



function validateInput(req) {
    return validateParameters(req.params);
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string'
        && ObjectIdIsValid(prm.activityId);
}


module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const activityId = req.params.activityId,
        userId = req.user._id;

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
