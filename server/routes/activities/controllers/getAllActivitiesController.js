const Activity = require("../../../models/").Activity;

module.exports = function (req, res, next) {
        let user = req.user;
        let activities = user.activities;

        let resultLst = [];
        for (let i = 0; i < activities.length; i++) {
            Activity.findOne({
                _id: activities[0]
            }, function (err, activity) {
                if (err) throw err;

                if (!activity) {
                    res.json({
                        success: false,
                        message: "Activity ID: "
                        + activities[0].toString
                        + "; doesn't find matched activity",
                    });
                }
                else {
                    resultLst.push(activity.name);
                }
            });
        }

        res.json({
            success: true,
            userActivities: resultLst,
        });
}
