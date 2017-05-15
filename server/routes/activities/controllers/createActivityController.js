const Activity = require("../../../models/").Activity;

// create an activity
module.exports = {
    createActivityController: function (req, res, next) {
        res.send("created new activity");
    }
};
