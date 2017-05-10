/**
 * Created by rui on 5/9/17.
 */

module.exports = {
    // get a the list of activity of a user
    getActivitiesController: function (req, res, next) {
        //console.log(req);
        res.send("get activities");
    },

    // create an activity
    createActivityController: function (req, res, next) {
        res.send("created new activity");
    },

    // get one activity
    getActivityController: function (req, res, next) {
        res.send("get one activity");
    },

    // delete one activity
    deleteActivityController: function (req, res, next) {
        res.send("delete an activity");
    },

    updateActivityController: function (req, res, next) {
        res.send("update an activity");
    },
};
