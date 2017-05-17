const Activity = require("../../../models/").Activity;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;

const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;

    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }

    // save a new activity to to the database
    if (!validateInput()) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const newActivity = new Activity({
        _creator: userId,
        name: payload.name,
        groupCapacity: payload.groupCapacity,
        totalCapacity: payload.totalCapacity,
        endDate: payload.endDate,
    });

    newActivity.save()
        .then(function (newActivity) {
            const newActivityId = newActivity._id;
            User.findOneAndUpdate(
                {_id: userId},
                {
                    // add activity id to user.activities
                    $push: {
                        "activities": {_id: newActivityId}
                    },

                    // set the last modfied date
                    $set: {
                        "lastModifiedTime": Date.now()
                    }
                })
                .exec()
                .then(function (user) {
                    return res.json({
                        activity: newActivity
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
