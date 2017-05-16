const Activity = require("../../../models/").Activity;

// update an activity

// TODO: check if the payload is formatted the way we want
function checkPayload(payload) {
    return payload !== null;
}

module.exports = function (req, res, next) {
    if (!checkPayload(req.body)) {
        // TODO: set http status code
        return res.json({
            success: false,
            message: "activity info is not formatted correctly"
        });
    }

    Activity.findOneAndUpdate(
        { _id: req.params.activityId, _creator: req.user._id, isDeleted: false },
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
                    success: true,
                });
            } else {
                // TODO: set http header to resource not found
                return res.json({
                    success: false,
                    message: "you don't have an activity has id " + req.params.activityId,
                });
            }
        })
        .catch(function (err) {
            // TODO: set http header to system error
            return res.json({
                success: false,
                message: err
            });
        })
};
