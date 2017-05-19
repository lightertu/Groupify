const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models/").Activity;
const createErrorHandler = require("../../utils").createErrorHandler;



function validateInput(req) {
    return validateParameters(req.params);
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

    Activity.findOne(
        {_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
        .select("name totalCapacity groupCapacity endDate participants")
        .exec()
        .then(function (activity) {
            if (activity !== null) {
                return res.json({
                    activity: activity
                });
            } else {
                const errorMessage = "Cannot find an activity has id " + req.params.activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};

