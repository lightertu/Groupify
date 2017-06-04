/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils.js").createErrorHandler;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../../models/").Activity;


function validateInput(req) {
    return validateParameters(req.params) ;
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string'
        && ObjectIdIsValid(prm.activityId);
}


module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct activityID in URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
        .populate({
            path: 'participants',
            select: 'name image groupNumber surveyResponses lastModified',
            match: {isDeleted: false},
            options: {
                sort: {lastModifiedAt: 1} // last modified appears first
            }
        })
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity: " + req.params.activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            return res.json({
                participants: activity.participants,
            })
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
