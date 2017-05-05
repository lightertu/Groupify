/**
 * Created by rui on 4/24/17.
 */
let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Participant = new Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },

    _activity :{
        type: Schema.ObjectId,
        ref: 'Activity'
    },

    _activityOrganizer: {
        type: Schema.ObjectId,
        ref: 'User'
    },

    image: {
        data: Buffer,
        contentType: String
    },

    skills: {
        type: [{name: String}],
        default: [],
    },

    groupNumber: {
        type: Number,
        default: -1,
    },

    availability: {
        type: [Number],
        default: [],
        validate: [(availability) => ( Math.min(availability) >= 0 && Math.max(availability) <= 6 ), '{PATH} a week has 7 days']
    },


    /* every model has this */
    isDeleted: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
        isRequired: true,
    },

    lastModifiedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Participant', Participant);
