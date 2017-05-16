const Activity = require("../../../models/").Activity;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;

const HttpStatus = require("http-status-codes");

// create an activity



module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;

    // TODO: check if the payload is valid
    function validateInput() {
        return payload !== null
    }
    // save a new activity to to the database
    if (!validateInput()) {
        res.status(HttpStatus.BAD_REQUEST);
        return res.json({
            error: 'please give the correct payload',
        })
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
                        newActivity: newActivity
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
