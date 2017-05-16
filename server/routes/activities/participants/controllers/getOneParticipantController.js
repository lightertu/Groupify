/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils.js").createErrorHandler;
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    // TODO: if ID is malformed, the system will give an error

    function validateInput () {
        return true;
    }


    if (!validateInput()) {
        createErrorHandler(res, HttpStatus.UNPROCESSABLE_ENTITY)("malformed input");
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
                updatedGroupNumber: participant.groupNumber
            })
        })

        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};