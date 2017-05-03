/**
 * Created by rui on 4/24/17.
 */
let mongoose = require('mongoose');
let Survey = require('./Survey');

let ActivitySchema = new mongoose.Schema({
    // copied this from yours, not sure what it is, Id maybe?
    survey: {
        type: Survey,
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
        type: [ participantId ],
        default: []
    },

    name: {
        type: String,
        default: ""
    },


    creationDate{
        type: Date,
        default: Date.now
    },

    endDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('ActivitySchema', ActivitySchema);
