/**
 * Created by rui on 5/9/17.
 */

module.exports = {
    getActivitiesController: function(req, res, next) {
        res.send("get activities");
    },

    createActivityController: function(req, res, next) {
        res.send("created new activity");
    },
};
