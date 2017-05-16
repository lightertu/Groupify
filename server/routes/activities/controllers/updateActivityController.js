const Activity = require("../../../models/").Activity;

const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

// TODO: check if the payload is formatted the way we want
function checkPayload(payload) {
    return payload !== null;
}

// TODO: put request should return a new COPY of the object needs to be saved
module.exports = function (req, res, next) {

    const activityId = req.params.activityId,
          userId     = req.user._id;

    if (!checkPayload(req.body)) {
        res.status(HttpStatus.BAD_REQUEST);
        return res.json({
            error: "activity object is not formatted correctly"
        });
    }

    Activity.findOneAndUpdate(
        { _id: activityId, _creator: userId, isDeleted: false },
        {
            $set: {
                "name": req.body.name,
                "endDate": new Date(req.body.endDate),
                "totalCapacity": req.body.totalCapacity,
                "groupCapacity": req.body.groupCapacity,
            }
        }

        ).exec()
        .then(function (activity) {
            if (activity !== null) {
                return res.json({
                    activity: activity
                });
            } else {
                const errorMessage = "Cannot find activity has id: " + activityId;
                return createErrorHandler(res, HttpStatus.EXPECTATION_FAILED)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
