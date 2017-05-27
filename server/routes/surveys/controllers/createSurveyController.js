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

    payload.questions.forEach(function (question) {
        questionProperties.forEach(function (property) {
            res = res && question.hasOwnProperty(property); 
            console.log(property + " is: " + question.hasOwnProperty(property));
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
    (
        Array.isArray(answers)
    ) 
    ? 
    console.log('answers Validation Was Successful') 
    : 
    console.log('answers Validation Failed')
    return Array.isArray(answers);
}

function validateAnswersFilter(answersFilter){
    (
        Array.isArray(answersFilter)
    ) 
    ? 
    console.log('answersFilter Validation Was Successful') 
    : 
    console.log('answersFilter Validation Failed')
    return Array.isArray(answersFilter);
}

function validateAnswersEnableFilterBlacklistMode(answersFilterEnableBlacklistMode){
    (
    typeof answersFilterEnableBlacklistMode === 'boolean'
    ) 
    ? 
    console.log('Validation of answersFilterEnableBlacklistMode Was Successful') 
    : 
    console.log('Validation of answersFilterEnableBlacklistMode Failed')
    return typeof answersFilterEnableBlacklistMode === 'boolean';
}

function validateAnswersEnableFilter(answersEnableFilter){
    (
    typeof answersEnableFilter === 'boolean'
    )
    ? 
    console.log('Validation of answersEnableFilter Was Successful') 
    : 
    console.log('Validation of answersEnableFilter Failed')
    return typeof answersEnableFilter === 'boolean';
}

function validateAnswersEnableMinimum(answersEnableMinimum){
    (
    typeof answersEnableMinimum === 'boolean'
    )
    ? 
    console.log('Validation of answersEnableMinimum Was Successful') 
    : 
    console.log('Validation of answersEnableMinimum Failed')
    return typeof answersEnableMinimum === 'boolean';
}

function validateAnswersEnableMaximum(answersEnableMaximum){
    (
    typeof answersEnableMaximum === 'boolean'
    )
    ? 
    console.log('Validation of answersEnableMaximum Was Successful') 
    : 
    console.log('Validation of answersEnableMaximum Failed')
    return typeof answersEnableMaximum === 'boolean';
}

function validateTitle(title){
    (
    typeof title === 'string' && title.length > 0
    )
    ? 
    console.log('Validation of title Was Successful') 
    : 
    console.log('Validation of title Failed')
    return typeof title === 'string' && title.length > 0;
}

function validateAnswersMaximum(answersMaximum){
    (
    typeof answersMaximum === 'number' && answersMaximum >= 0
    )
    ? 
    console.log('Validation of answersMaximum Was Successful') 
    : 
    console.log('Validation of answersMaximum Failed')
    return typeof answersMaximum === 'number' && answersMaximum >= 0;
}

function validateAnswersMinimum(answersMinimum){
    (
    typeof answersMinimum === 'number' && answersMinimum >= 0
    )
    ? 
    console.log('Validation of answersMinimum Was Successful') 
    : 
    console.log('Validation of answersMinimum Failed')
    return typeof answersMinimum === 'number' && answersMinimum >= 0;
}

function validateTooltip(tooltip){
    (
    typeof tooltip === 'string' && tooltip.length >= 0
    )
    ? 
    console.log('Validation of tooltip Was Successful') 
    : 
    console.log('Validation of tooltip Failed')
    return typeof tooltip === 'string' && tooltip.length >= 0;
}

function validateType(type){
    (
    typeof type === 'string' && type.length > 0
    )
    ? 
    console.log('Validation of type Was Successful') 
    : 
    console.log('Validation of type Failed')
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

    console.log('validation: ' + validateInput(payload));

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
