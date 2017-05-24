const HttpStatus = require("http-status-codes");

const Survey = require("../../../models/").Survey;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;

const properties = ['questions', 'title'];
const questionProperties = ['type', 'title', 'tooltip', 'answersEnableMaximum', 'answersMaximum', 'answersFilter', 'answersFilterEnableBlacklistMode', 'answersEnableFilter', 'answers', 'answersEnableMinimum', 'answersMinimum'];


function validateInput(payload) {
    return validateFormat(payload, properties, questionProperties)
        && validateTitle(payload.title)
        && vaildateQuestions(payload.questions)
}


function validateFormat(payload, properties, questionProperties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
        console.log(property + " is: " + payload.hasOwnProperty(property));
    });

    questionProperties.forEach(function (property) {
        payload.questions.forEach(function (question) {
            res = res && question.hasOwnProperty(property); 
        })
    });
    return res;
}

function vaildateQuestions(questions){
    let res = true;
    questions.forEach(function (question) {
        res = res && validateType(question.type)
            && validateTitle(question.title)
            && validateAnswers(question.answers)
            && validateAnswersFilter(question.answersFilter)
            && validateAnswersEnableFilter(question.answersEnableFilter)
            && validateAnswersEnableFilterBlacklistMode(question.answersFilterEnableBlacklistMode)
            && validateAnswersEnableMaximum(question.answersEnableMaximum)
            && validateAnswersEnableMinimum(question.answersEnableMinimum)
            && validateAnswersMaximum(question.answersMaximum)

    })
    return res;
}

function validateAnswers(answers){
//    console.log("answers is: " + Array.isArray(answers));
    return Array.isArray(answers);
}

function validateAnswersFilter(answersFilter){
//    console.log("answersFilter is: " + Array.isArray(answersFilter));
    return Array.isArray(answersFilter);
}

function validateAnswersEnableFilterBlacklistMode(answersFilterEnableBlacklistMode){
//    console.log("answersEnableFilterBlacklistMode is: " + typeof answersFilterEnableBlacklistMode === 'boolean');
    return typeof answersFilterEnableBlacklistMode === 'boolean';
}

function validateAnswersEnableFilter(answersEnableFilter){
//    console.log("answersEnableFilter is: " + typeof answersFilter === 'boolean');
    return typeof answersEnableFilter === 'boolean';
}

function validateAnswersEnableMinimum(answersEnableMinimum){
//    console.log("answersEnableMinimum is: " + typeof answersEnableMinimum=== 'boolean');
    return typeof answersEnableMinimum === 'boolean';
}

function validateAnswersEnableMaximum(answersEnableMaximum){
    return typeof answersEnableMaximum === 'boolean';
}

function validateTitle(title){
    return typeof title === 'string' && title.length > 0;
}

function validateAnswersMaximum(answersMaximum){
    return typeof answersMaximum === 'number' && answersMaximum >= 0;
}

function validateAnswersMinimum(answersMinimum){
    return typeof answersMinimum === 'number' && answersMinimum >= 0;
}

function validateTooltip(tooltip){
    return typeof tooltip === 'string' && tooltip.length >= 0;
}

function validateType(type){
    return typeof type === 'string' && type.length > 0;
}

module.exports = function (req, res, next) {
    console.log("TEAAAAST");
    const userId = req.user._id;
    const payload = req.body;

    console.log(payload);
    
    if (!validateInput(payload)) {
        const errorMessage = 'please give the correct payload';
        return createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
    }

    const newSurvey = new Survey({
        _creator: userId,
        title: payload.title,
        questions: payload.questions
    });

    newSurvey.save()
        .then(function (newSurvey) {
            const newSurveyId = newSurvey._id;
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
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
