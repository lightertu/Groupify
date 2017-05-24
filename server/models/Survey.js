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

    answersFilter: { type: [String], default: ""},
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

//QuestionSchema.index({title: 1, type: 1}, {unique: true});


SurveySchema.pre('save', function(next){
    let survey = this;

    if (!this.isNew){
        survey.lastModifiedTime = Date.now();
    }
    next();
});

/*SurveySchema.methods.getPublicFields = function () {
    return {
        name: this.name,
        totalCapacity: this.totalCapacity,
        groupCapacity: this.groupCapacity,
        endDate: this.endDate,
        participants: this.participants,
        lastModifiedTime: this.lastModifiedTime,
    };
};*/
module.exports = mongoose.model('Survey', SurveySchema);
//db.users.createIndex({email:1},{unique:true, sparse:true});
