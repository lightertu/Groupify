/**
 * Created by Matt And Kai on 5/23/17.
 */

let mongoose = require('mongoose');

const Schema = mongoose.Schema;


let QuestionSchema = Schema({
    answers: { type: [String], default: ""},

    answersEnableFilter: { type: Boolean, default: false },
    answersEnableMaximum:{ type: Boolean, default: false },
    answersEnableMinimum:{ type: Boolean, default: false },

    answersFilter: { type: [String],  default: ""},
    answersFilterEnableBlacklistMode:{ type: Boolean, default: false},

    answersMaximum: { type: Number, default: 0},
    answersMinimum: { type: Number, default: 0},

    title: {type: String, required: true},
    tooltip: {type: String, default: ""},
    type: {type: String, required: true},
});


let SurveySchema = Schema({
    _creator: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
    },

    title: {
        type: String,
        default: "",
        required: true,
    },

    questions:  [QuestionSchema],



    // every model has this
    isDeleted: {
        type: Boolean,
        default: false,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },

    lastModifiedTime: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

QuestionSchema.index( {title: 1, type: 1}, {unique: true} );


SurveySchema.pre('save', function(next){
    let survey = this;

    if (!this.isNew){
        survey.lastModifiedTime = Date.now();
    }
    next();
});

SurveySchema.methods.getPublicFields = function () {
    return {
        _id : this._id,
        title: this.title,
        questions: this.questions,
        _creator: this._creator,
        lastModifiedTime: this.lastModifiedTime,
        createdAt: this.createdAt,
    };
};



function validateTitle(title){
    return typeof title === 'string' && title.length > 0;
}


const questionProperties = ["answers", "answersEnableFilter", "answersEnableMaximum", "answersEnableMinimum",
    "answersFilter", "answersFilterEnableBlacklistMode", "answersMaximum", "answersMinimum",
    "title", "tooltip", "type"];

function validateAnswers(answers){
    let result = Array.isArray(answers);
    if (result === true){
        answers.forEach(function (a) {
            result = result && (typeof a === 'string');
        });
    }
    return result;
}

function validateAnswersFilter(answersFilter){
    let result = Array.isArray(answersFilter);
    if (result === true){
        answersFilter.forEach(function (af) {
            result = result && (typeof af === 'string');
        });
    }
    return result;
}

function validateBoolean(b){
    return typeof b === 'boolean';
}

function validateNumber(n, minValue){
    return typeof n === 'number' && n >= minValue;
}

function validateString(s, minLength) {
    return typeof s === 'string' && s.length >= minLength;
}


function validateQuestion(questions){
    let result = Array.isArray(questions);
    questions.forEach(function (q) {
        result = result
            && validateFormat(q, questionProperties)
            && validateString(q.type, 1)
            && validateString(q.tooltip, 0)
            && validateString(q.title, 1)

            && validateAnswers(q.answers)
            && validateAnswersFilter(q.answersFilter)

            && validateBoolean(q.answersEnableFilter)
            && validateBoolean(q.answersFilterEnableBlacklistMode)
            && validateBoolean(q.answersEnableMaximum)
            && validateBoolean(q.answersEnableMinimum)

            && validateNumber(q.answersMaximum, 0)
            && validateNumber(q.answersMinimum, 0);
    });

    return result;
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


function SurveyValidator(title, question) {
    console.log("title " + validateTitle(title));
    return validateTitle(title) && validateQuestion(question);
}



module.exports = {
    Survey: mongoose.model('Survey', SurveySchema),
    SurveyValidator: SurveyValidator,
};
