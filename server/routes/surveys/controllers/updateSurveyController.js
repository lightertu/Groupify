const HttpStatus = require("http-status-codes");
const validator = require('validator');
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Survey = require("../../../models").Survey;
const SurveyValidator = require("../../../models/").SurveyValidator;
const createErrorHandler = require("../../utils").createErrorHandler;



const SurveyProperties = ['title', 'questions'];

function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params)
        && validateFormat(payload, SurveyProperties)
        && SurveyValidator(payload.title, payload.questions);
}


function validateParameters(prm) {
    return prm.hasOwnProperty('surveyId') && typeof prm.surveyId === 'string'
        && ObjectIdIsValid(prm.surveyId);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload and URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }
    const surveyId = req.params.surveyId,
        userId = req.user._id;

    Survey.findOneAndUpdate(
        {
            _id: surveyId, _creator: userId, isDeleted: false},
        {
            $set: {
                "title": req.body.title,
                "questions" : req.body.questions,
            },
        },
        {
            new: true,
        }
    )
        .exec()
        .then(function (survey) {
            if (survey === null) {
                const errorMessage = "Cannot find survey has id: " + surveyId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.status(HttpStatus.ACCEPTED).json({
                survey: survey
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
