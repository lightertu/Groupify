/**
 * Created by rui on 4/24/17.
 */
let mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    },

    groupNumber: {
        type: Number,
        default: -1,
    },

    availability: {
        type: [Number],
        default: [],

        //TODO: validate data
        //validate: [(availability) => ( Math.min(availability) >= 0 && Math.max(availability) <= 6 ), '{PATH} a week has 7 days']
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
        image: this.totalCapacity,
        groupNumber: this.groupCapacity,
        availability: this.endDate,
        skills: this.skills,
        lastModifiedTime: this.lastModifiedTime,
    };
};

module.exports = mongoose.model('Participant', ParticipantSchema);
