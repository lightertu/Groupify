const validator = require('validator');
const HttpStatus = require("http-status-codes");

const User = require("../../../models/").User;
const Activity = require("../../../models/").Activity;
const ActivityValidator = require("../../../models/").ActivityValidator;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['name', 'groupCapacity', 'totalCapacity', 'endDate'];


function validateInput(payload) {
    return validateFormat(payload, properties)
        && ActivityValidator(payload.name, payload.groupCapacity,
            payload.totalCapacity, payload.endDate);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;

    if (!validateInput(payload)) {
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
                        activity: newActivity.getPublicFields()
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
