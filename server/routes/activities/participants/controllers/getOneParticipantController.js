/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Participant = require("../../../../models/").Participant;
const createErrorHandler = require("../../../utils.js").createErrorHandler;


function validateInput(req) {
    return validateParameters(req.params) ;
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && prm.hasOwnProperty('participantId')
        && typeof prm.activityId === 'string' && typeof prm.participantId === 'string'
        && ObjectIdIsValid(prm.activityId) && ObjectIdIsValid(prm.participantId);
}

module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct activityID && participantId in URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Participant.findOne({
        _id: req.params.participantId,
        _activity: req.params.activityId,
        _creator: req.user._id,
        isDeleted: false
    })
        .exec()
        .then(function (participant) {
            if (participant === null) {
                const errorMessage = "Cannot find participant: " + req.params.participantId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            return res.json({
                participant: participant.getPublicFields()
            })
        })

        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
