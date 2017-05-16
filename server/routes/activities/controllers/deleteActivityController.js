const Activity = require("../../../models/").Activity;

// create an activity
module.exports = function (req, res, next) {
    Activity.findOneAndUpdate(
        { _id: req.params.activityId, _creator: req.user._id },
        {
            $set: {
               "isDeleted" : true,
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
