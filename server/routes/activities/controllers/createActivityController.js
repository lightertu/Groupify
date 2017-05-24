const validator = require('validator');
const HttpStatus = require("http-status-codes");

const Activity = require("../../../models/").Activity;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['name', 'groupCapacity', 'totalCapacity', 'endDate'];


function validateInput(payload) {
    return validateFormat(payload, properties)
        && validateName(payload.name)
        && validateCapacities(payload.groupCapacity, payload.totalCapacity)
        && validateDate(payload.endDate);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


function validateName(name){
    return typeof name === 'string';
}


function validateCapacities(g, t){
    return Number.isInteger(g) && Number.isInteger(t) && g>0 && t>0 && g<=t;
}


function validateDate(date) {
    return typeof date === 'string' && validator.toDate(date) !== null;
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
                        activity: newActivity
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
