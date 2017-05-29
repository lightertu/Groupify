/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils").createErrorHandler;
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

const selectAlgorithmAndReturnFunction = require("../algorithms/").selectAlgorithmAndReturnFunction;

function validateInput(req) {
    return validateParameters(req.params) ;
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && prm.hasOwnProperty('algorithmName')
        && typeof prm.activityId === 'string' && typeof prm.algorithmName === 'string'
        && ObjectIdIsValid(prm.activityId);
}



module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    selectAlgorithmAndReturnFunction
    createErrorHandler(res, HttpStatus.NOT_IMPLEMENTED)("not implemented");
};
