/**
 * Created by rui on 4/24/17.
 */
const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;


const ParticipantSchema = new Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },

    email: {
        type: String,
        lowercase: true,
        required: true,
    },

    // _creator: {
    //     type: Schema.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },

    _activity :{
        type: Schema.ObjectId,
        ref: 'Activity',
        required: true
    },

    image: {
        data: Buffer,
        contentType: String
    },


    groupNumber: {
        type: Number,
        default: -1,
        required: true
    },

    surveyResponses: [{
        question: String,
        answer: [String],
    }],

    /* every model has this */
    isDeleted: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },

    lastModifiedTime: {
        type: Date,
        default: Date.now,
    }
});

ParticipantSchema.pre('save', function(next){
    let participant = this;

    if (!this.isNew){
        participant.lastModifiedTime = Date.now();
    }
    next();
});

ParticipantSchema.methods.getPublicFields = function () {
    return {
        name: this.name,
        image: this.image,
        groupNumber: this.groupNumber,
        surveyResponses: this.surveyResponses,
        lastModifiedTime: this.lastModifiedTime,
    };
};



// validate input
function validateName(name){
    return typeof name === 'string';
}

function validateEmail(email){
    return typeof email === 'string' && validator.isEmail(email);
}

// TODO: implement image function
function validateImage(image){
    return true;
}

function validateSurveyResponses(surveyRp){
    let result = Array.isArray(surveyRp);
    if (result === true){
       surveyRp.forEach(function (rp){
           result = result && rp.hasOwnProperty('question') && rp.hasOwnProperty('answer')
                && typeof rp.question === 'string' && Array.isArray(rp.answer);
           if (result){
               rp.answer.forEach(function (a){
                   result = result && typeof a === 'string';
               })
           }
       });

    }
    return result;

}

function ParticipantValidator(name, email, image, surveyRp) {
    return validateName(name)
        && validateEmail(email)
        && validateImage(image)
        && validateSurveyResponses(surveyRp)
}



module.exports = {
    Participant             : mongoose.model('Participant', ParticipantSchema),
    ParticipantValidator    : ParticipantValidator,
};



// function validateSkills(skills) {
//     let result = Array.isArray(skills);
//     if (result === true){
//         skills.forEach(function (s) {
//             result = result && (s.hasOwnProperty('name') ? typeof s.name === 'string' : false);
//         });
//     }
//     return result;
// }
//
// function validateAvailability(avail) {
//     let result = Array.isArray(avail);
//     if (result === true){
//         avail.forEach(function (a) {
//             result = result && typeof a === 'boolean';
//         });
//     }
//     result = result && avail.length === numOfTimeSlot;
//     return result;
// }
