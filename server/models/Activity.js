/**
 * Created by rui on 4/24/17.
 */

let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ActivitySchema = Schema({
    _activityOrganizer: {
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

module.exports = mongoose.model('Activity', ActivitySchema);
