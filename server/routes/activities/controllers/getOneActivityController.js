const ObjectID = require('mongodb').ObjectID;
const Activity = require("../../../models/").Activity;

module.exports = function (req, res, next) {
    Activity.findOne({_id: req.params.activityId}).exec()
        .then(function (activity) {
            console.log("in the then ");
            const activityCreatorId = new ObjectID(activity._creator),
                  userId            = new ObjectID(req.user._id);

            if (activityCreatorId.equals(userId)) {
                return res.json({
                    success: true,
                    payload: activity
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
            console.log(err);
            return res.json({
                success: false,
                message: err
            });
        })
};

