const HttpStatus = require("http-status-codes");
const validator = require('validator');
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models/").Activity;
const ActivityValidator = require("../../../models/").ActivityValidator;
const Participant = require("../../../models").Participant;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = ['title', 'groupCapacity', 'totalCapacity', 'endDate'];


function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params)
        && validateFormat(payload, properties)
        && ActivityValidator(payload.title, payload.groupCapacity,
            payload.totalCapacity, payload.endDate);
}


function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string'
        && ObjectIdIsValid(prm.activityId);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


function checkTotalCapacity(newTotalC, oldTotalC, currentC){
    return newTotalC >= oldTotalC || currentC < newTotalC;
}

function handleTheNewNumberOfGroups(newNumOfGroup, oldNumOfGroup, activity, res){
    console.log(newNumOfGroup + " " + oldNumOfGroup);
    if (newNumOfGroup < oldNumOfGroup){
        activity.participants.forEach(function (parId){
            Participant.findOneAndUpdate(
                {
                    _id: parId, _activity: activity._id, groupNumber: {  $gte: newNumOfGroup }, isDeleted: false,
                },
                {
                    $set: {
                        "lastModifiedAt": Date.now(),
                        "groupNumber": -1,
                    }
                },
                {new: true}
            ).exec().then(function (par){
                // do nothing here
            }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        });
    }
}



module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the valid activityID in url and correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const activityId = req.params.activityId,
        userId = req.user._id,
        payload = req.body;


    Activity.findOne({
        _id: activityId, _creator: userId, isDeleted: false
    })
        .exec()
        .then(function (activity) {
            if (activity === null){
                const errorMessage = "Cannot find activity has id: " + activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            // check if total capacity works: pass this test if newTotalC not < oldTotalC
            if (!checkTotalCapacity(payload.totalCapacity, activity.totalCapacity, activity.currentCapacity)){
                const errorMessage = "the new total capacity should at least greater than current capacity";
                return createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
            }


            // check if number of groups are changed. if so, let rest participants have groupNumber -1
            let newNumOfGroup = payload.totalCapacity / payload.groupCapacity;
            let oldNumOfGroup = activity.totalCapacity / activity.groupCapacity;

            handleTheNewNumberOfGroups(newNumOfGroup, oldNumOfGroup, activity, res);


            // now we can save the new data to activity model
            activity.title = payload.title;
            activity.endDate = new Date(payload.endDate);
            activity.totalCapacity = payload.totalCapacity;
            activity.groupCapacity = payload.groupCapacity;


            activity.save()
                .then(function (activity) {
                    return res.json({
                        activity: activity
                    });
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

};
