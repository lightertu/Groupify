/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils").createErrorHandler;

const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }
    // save a new activity to to the database
    if (!validateInput()) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
    }

    createErrorHandler(res, HttpStatus.NOT_IMPLEMENTED)("Not implemented");

};