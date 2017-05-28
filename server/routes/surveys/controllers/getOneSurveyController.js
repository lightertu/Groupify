const Survey = require("../../../models/").Survey;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");


function validateInput(req) {
    return validateParameters(req.params);
}

function validateParameters(prm) {
    return prm.hasOwnProperty('surveyId') && typeof prm.surveyId === 'string';
}


module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Survey.findOne(
        {_id: req.params.surveyId, _creator: req.user._id, isDeleted: false})
        // .select("name totalCapacity groupCapacity endDate participants")
        .exec()
        .then(function (survey) {
            if (survey !== null) {
                return res.json({
                    survey: survey
                });
            } else {
                const errorMessage = "Cannot find an survey has id " + req.params.surveyId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};

