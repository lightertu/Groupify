/**
 * Created by rui on 4/24/17.
 */
let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const numOfTimeSlot = 7;

const ParticipantSchema = new Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },

    _creator: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },

    _activity :{
        type: Schema.ObjectId,
        ref: 'Activity',
        required: true
    },

    image: {
        data: Buffer,
        contentType: String
    },

    skills: {
        type: [{name: String}],
        default: [],
        required: true
    },

    groupNumber: {
        type: Number,
        default: -1,
        required: true
    },

    availability: {
        type: [Boolean],
        required: true
    },


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
        availability: this.availability,
        skills: this.skills,
        lastModifiedTime: this.lastModifiedTime,
    };
};


function validateName(name){
    return typeof name === 'string';
}


// TODO: implement image function
function validateImage(image){
    return true;
}


function validateSkills(skills) {
    let result = Array.isArray(skills);
    if (result === true){
        skills.forEach(function (s) {
            result = result && (s.hasOwnProperty('name') ? typeof s.name === 'string' : false);
        });
    }
    return result;
}

function validateAvailability(avail) {
    let result = Array.isArray(avail);
    if (result === true){
        avail.forEach(function (a) {
            result = result && typeof a === 'boolean';
        });
    }
    result = result && avail.length === numOfTimeSlot;
    return result;
}

function ParticipantValidator(name, image, skills, avail) {
    return validateName(name)
        && validateImage(image)
        && validateSkills(skills)
        && validateAvailability(avail);
}

module.exports = {
    Participant             : mongoose.model('Participant', ParticipantSchema),
    ParticipantValidator    : ParticipantValidator,
};
