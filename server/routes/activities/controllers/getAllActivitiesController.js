const Activity = require("../../../models/").Activity;


module.exports = {
    // get a the list of activity of a user
    getAllActivitiesController: function (req, res, next) {
        let user = req.user;
        let activities = user.activities;

        let resultLst = [];
        ß
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
    },
}
