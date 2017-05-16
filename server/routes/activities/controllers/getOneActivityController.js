const ObjectID = require('mongodb').ObjectID;
const Activity = require("../../../models/").Activity;

module.exports = function (req, res, next) {
    Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false}).exec()
        .then(function (activity) {
            if (activity !== null) {
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

