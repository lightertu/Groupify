/**
 * Created by Matt And Kai on 5/23/17.
 */

let mongoose = require('mongoose');

const Schema = mongoose.Schema;


let QuestionSchema = Schema({
    answers: { type: [String], required: true, },

    answersEnableFilter: { type: Boolean, default: false },
    answersEnableMaximum:{ type: Boolean, default: false },
    answersEnableMinimum:{ type: Boolean, default: false },

    answersFilter: { type: [String],  required: true,},
    answersFilterEnableBlacklistMode:{ type: Boolean, default: false},

    answersMaximum: { type: Number, default: 0},
    answersMinimum: { type: Number, default: 0},

    title: {type: String, required: true},
    tooltip: {type: String, required: true},
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
        unique: true
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
    return typeof title === 'string';
}


const questionProperties = ["answers", "answersEnableFilter", "answersEnableMaximum", "answersEnableMinimum",
    "answersFilter", "answersFilterEnableBlacklistMode", "answersMaximum", "answersMinimum",
    "title", "tooltip", "type"];

function validateQuestion(questions){
    let result = Array.isArray(questions);
    questions.forEach(function (q) {
        result = result && validateFormat(q, questionProperties);
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


function SurveyValidator(title, questions) {
    return validateTitle(title) && validateQuestion(questions);
}



module.exports = {
    Survey: mongoose.model('Survey', SurveySchema),
    SurveyValidator: SurveyValidator,
};
