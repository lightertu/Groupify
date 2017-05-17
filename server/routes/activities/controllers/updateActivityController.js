const Activity = require("../../../models/").Activity;

const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    const activityId = req.params.activityId,
        userId = req.user._id;

    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }
    // save a new activity to to the database
    if (!validateInput()) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
    }

    Activity.findOneAndUpdate(
        {_id: activityId, _creator: userId, isDeleted: false},
        {
            $set: {
                "name": req.body.name,
                "endDate": new Date(req.body.endDate),
                "totalCapacity": req.body.totalCapacity,
                "groupCapacity": req.body.groupCapacity,
            }
        },
        // this select the properties to show
        {
            projection: {
                "name": 1,
                "endDate": 1,
                "totalCapacity": 1,
                "groupCapacity": 1,
                "participants": 1,
            },
            new: true,
        }
    )
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity has id: " + activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.json({
                updatedActivity: activity
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
