/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const createErrorHandler = require("../../../utils.js").createErrorHandler;
const Participant = require("../../../../models/").Participant;


const properties = ['groupNumber'];


function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params) && validateFormat(payload, properties)
        && validateGroupNumber(payload.groupNumber);
}

function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && prm.hasOwnProperty('participantId')
        && typeof prm.activityId === 'string' && typeof prm.participantId === 'string'
        && ObjectIdIsValid(prm.activityId) && ObjectIdIsValid(prm.participantId);
}

function validateGroupNumber(g) {
    return Number.isInteger(g) && g>-3;
}

module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give valid activityID && participantID in URL and correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Participant.findOneAndUpdate(
        {_id: req.params.participantId, _activity: req.params.activityId, _creator: req.user._id, isDeleted: false},
        {
            // we have to check if the groupNumber is less than the number of groups
            $set: {
                "lastModifiedAt": Date.now(),
                "groupNumber": req.body.groupNumber,
            }
        },
        {new: true}
    )
        .exec()
        .then(function (participant) {

            if (participant === null) {
                const errorMessage = "Cannot find participant: " + req.params.participantId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            return res.json({
                groupNumber: participant.getPublicFields()
            })
        })

        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
