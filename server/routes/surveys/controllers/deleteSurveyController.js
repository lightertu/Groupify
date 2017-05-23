const HttpStatus = require("http-status-codes");

const Survey = require("../../../models/").Survey;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;


function validateInput(req) {
    return validateParameters(req.params);
}

// TODO: MAY THINK FURTHOR HERE
function validateParameters(prm) {
    return prm.hasOwnProperty('surveyId') && typeof prm.surveyId === 'string'
        && ObjectIdIsValid(prm.surveyId);
}


module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct surveyId';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const surveyId = req.params.surveyId,
        userId = req.user._id;

    Survey.findOneAndRemove(
        {_id: surveyId, _creator: userId}
    ).exec()
        .then(function (survey) {
            /* if this survey is not found */
            if (survey === null) {
                const errorMessage = "Cannot find survey has id " + req.params.surveyId + " to delete";
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            /* remove this item from User.surveys array */
            User.findOneAndUpdate(
                {_id: userId},
                {$pull: {'surveys': surveyId}},
                {new: true}
            ).exec().then(function (user) {
                return res.status(HttpStatus.OK).json({
                    survey: survey,
                });
            })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));


        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
