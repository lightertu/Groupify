const HttpStatus = require("http-status-codes");
const validator = require('validator');

const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['name', 'groupCapacity', 'totalCapacity', 'endDate'];


function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params)
        && validateFormat(payload, properties)
        && validateName(payload.name)
        && validateCapacities(payload.groupCapacity, payload.totalCapacity)
        && validateDate(payload.endDate);
}


// TODO: MAY THINK FURTHER HERE
function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string';
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

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }


    const activityId = req.params.activityId,
        userId = req.user._id;

    Activity.findOneAndUpdate(
        {
            _id: activityId, _creator: userId, isDeleted: false},
        {
            $set: {
                "name": req.body.name,
                "endDate": new Date(req.body.endDate),
                "totalCapacity": req.body.totalCapacity,
                "groupCapacity": req.body.groupCapacity,
            }
        },
        // this select the properties to show
        {
            projection: {
                "name": 1,
                "endDate": 1,
                "totalCapacity": 1,
                "groupCapacity": 1,
                "participants": 1,
            },
            new: true,
        }
    )
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity has id: " + activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.json({
                activity: activity
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
