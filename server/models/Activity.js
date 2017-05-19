/**
 * Created by rui on 4/24/17.
 */

const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

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

    name: {
        type: String,
        default: "",
        required: true,
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
        name: this.name,
        totalCapacity: this.totalCapacity,
        groupCapacity: this.groupCapacity,
        endDate: this.endDate,
        participants: this.participants,
        lastModifiedTime: this.lastModifiedTime,
    };
};


function validateName(name){
    return typeof name === 'string';
}


function validateCapacities(g, t){
    return Number.isInteger(g) && Number.isInteger(t) && g>0 && t>0 && g<=t;
}


function validateDate(date) {
    return typeof date === 'string' && validator.toDate(date) !== null;
}

function ActivityValidator(name, groupCap, totalCap, endD){
    return validateName(name)
        && validateCapacities(groupCap, totalCap)
        && validateDate(endD);
}

module.exports = {
    Activity: mongoose.model('Activity', ActivitySchema),
    ActivityValidator: ActivityValidator,
};
