/**
 * Created by rui on 4/24/17.
 */

const mongoose = require('mongoose');
const validator = require('validator');
const randomColor = require('randomcolor');

const SurveySchema = require('./Survey').Survey;
const Schema = mongoose.Schema;

const Survey = mongoose.model('Survey');


let ActivitySchema = Schema({
    _creator: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
    },

    participants: {
        type: [{ type: Schema.ObjectId, ref: "Participant"}],
        default: [],
    },

    groupCapacity: {
        type: Number,
        required: true,
    },

    totalCapacity: {
        type: Number,
        required: true,
    },

    currentCapacity: {
        type: Number,
        default: 0,
        required: true,
    },

    title: {
        type: String,
        default: "",
        required: true,
    },

    survey: {
        type: Survey.schema,
        required: true,
    },

    lockedGroups: {
        type: [Number],
        default: [],
    },


    color: {
        type: String,
        default: activityRandomColorGenerator,
    },

    endDate: {
        type: Date,
        // default end date is 2 months from the activity is created
    },

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

ActivitySchema.pre('save', function(next){
    let activity = this;

    if (!this.isNew){
        activity.lastModifiedTime = Date.now();
    }
    next();
});

ActivitySchema.methods.getPublicFields = function () {
    return {
        _id: this._id,
        title: this.title,
        totalCapacity: this.totalCapacity,
        groupCapacity: this.groupCapacity,
        color: this.color,
        currentCapacity: this.currentCapacity,
        endDate: this.endDate,
        participants: this.participants,
        survey: this.survey,
        lockedGroups: this.lockedGroups,
        lastModifiedTime: this.lastModifiedTime,
    };
};




// generate Color
const randomColorType = {
    luminosity: 'dark',
    format: 'hsla',
    alpha: 0.7,
};

function activityRandomColorGenerator(){
    return randomColor(randomColorType);
}



// validate input
function validateTitle(title){
    return typeof title === 'string';
}


function validateCapacities(g, t){
    return Number.isInteger(g) && Number.isInteger(t) && g>0 && t>0 && g<=t;
}


function validateDate(date) {
    return typeof date === 'string' && validator.toDate(date) !== null;
}

function ActivityValidator(title, groupCap, totalCap, endD){
    return validateTitle(title)
        && validateCapacities(groupCap, totalCap)
        && validateDate(endD);
}



// export to other file
module.exports = {
    Activity: mongoose.model('Activity', ActivitySchema),
    ActivityValidator: ActivityValidator,
};
