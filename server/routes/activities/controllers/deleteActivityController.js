const Activity = require("../../../models/").Activity;
const User = require("../../../models/").User;

module.exports = function (req, res, next) {
    const activityId = req.params.activityId,
          userId     = req.user._id;

    Activity.findOneAndUpdate(
        { _id: activityId, _creator: userId },
        {
            $set: {
               "isDeleted" : true,
            }
        }

    ).exec()

    .then(function (activity) {
        if (activity === null) {
            // TODO: set http header to resource not found
            return res.json({
                success: false,
                message: "you don't have an activity has id " + req.params.activityId,
            });
        }

        /* remove this item from User.activities array */
        User.findOneAndUpdate(
            { _id: userId },
            { $pull: { 'activities': activityId } }
        ).exec().then(function(user){
            return res.json({
                success: true,
            });
        }).catch(function(err) {
            // TODO: set http header to resource not found
            return res.json({
                success: false,
                message: error,
            });
        });

    })
    .catch(function (err) {
        // TODO: set http header to system error
        return res.json({
            success: false,
            message: err
        });
    })
};
