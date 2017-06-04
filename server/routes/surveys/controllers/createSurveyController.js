const HttpStatus = require("http-status-codes");
const validator = require('validator');

const Survey = require("../../../models/").Survey;
const SurveyValidator = require("../../../models/").SurveyValidator;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;


const SurveyProperties = ['title', 'questions'];

function validateInput(req) {
    let payload = req.body;
    return validateFormat(payload, SurveyProperties)
        && SurveyValidator(payload.title, payload.questions);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {

    const userId = req.user._id;
    const payload = req.body;

    console.log(payload);

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const newSurvey = new Survey({
        _creator: userId,
        title: payload.title,
        questions: payload.questions
    });

    newSurvey.save()
        .then(function (newSurvey) {
            const newSurveyId = newSurvey._id;

            // push the survey id in User's surveys
            User.findOneAndUpdate(
                {_id: userId},
                {
                    // add survey id to user.surveys
                    $push: {
                        "surveys": {_id: newSurveyId}
                    },

                    // set the last modfied date
                    $set: {
                        "lastModifiedTime": Date.now()
                    }
                })
                .exec()
                .then(function (user) {
                    return res.json({
                        survey: newSurvey
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.NOT_FOUND));

            // push the whole survey into Activity's Survey

        })
        .catch(function(error){console.log(error)});
};
