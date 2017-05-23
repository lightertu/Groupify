/**
 * Created by rui on 4/24/17.
 */

const mongoose = require('mongoose');
const randomColor = require('randomcolor');

const Schema = mongoose.Schema

const randomColorType = {
    luminosity: 'dark',
    format: 'hsla', // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
    alpha: 0.7,
}

const activityRandomColorGenerator = () => {
    return randomColor(randomColorType);
}

let ActivitySchema = Schema({
    _creator: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },

    participants: {
        type: [{type: Schema.ObjectId, ref: 'Participant'}],
        default: [],
    },

    color: {
        type: String,
        default: activityRandomColorGenerator
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
        default: '',
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
})

ActivitySchema.pre('save', function (next) {
    let activity = this

    if (!this.isNew) {
        activity.lastModifiedTime = Date.now()
    }
    next()
})

ActivitySchema.methods.getPublicFields = function () {
    return {
        name: this.name,
        totalCapacity: this.totalCapacity,
        groupCapacity: this.groupCapacity,
        endDate: this.endDate,
        participants: this.participants,
        lastModifiedTime: this.lastModifiedTime,
    }
}
module.exports = mongoose.model('Activity', ActivitySchema)
