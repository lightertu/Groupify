/**
 * Created by rui on 4/24/17.
 */
let mongoose = require('mongoose');
let Participant = require('./Activity');

let ActivitySchema = new mongoose.Schema({
    // copied this from yours, not sure what it is, Id maybe?
    form: {
        type:String,
        default: null
    },

    groupCapacity: {
        type: number,
        default: 3
    },

    totalCapacity: {
        type: Number,
        default: 0
    },

    participants: {
        type: [Participant],
        default: []
    },

    name: {
        type: String,
        default: ""
    },

    timeCreated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('ActivitySchema', ActivitySchema);
