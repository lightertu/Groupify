/**
 * Created by rui on 4/24/17.
 */

let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ActivitySchema = Schema({
    _activityOrganizer: {
        type: Schema.ObjectId,
        ref: "User",
        isRequired: true,
    },

    participants: {
        type: [{ type: Schema.ObjectId, ref: "Participant"}]
    },

    groupCapacity: {
        type: Number,
        isRequired: true,
    },

    totalCapacity: {
        type: Number,
        isRequired: true,
    },

    name: {
        type: String,
        default: "",
        isRequired: true,
    },

    endDate: {
        type: Date,
        default: Date.now,
        isRequired: true,
    },

    // every model has this
    isDeleted: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
        isRequired: true,
    },

    lastModifiedTime: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Activity', ActivitySchema);
