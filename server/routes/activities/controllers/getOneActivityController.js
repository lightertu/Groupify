const Activity = require("../../../models/").Activity;

// create an activity
module.exports = {
    getOneActivityController: function (req, res, next) {
        res.send("created new activity");
    }
};
