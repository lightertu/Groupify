let mongoose = require('mongoose');
let Activity = require('./Activity');
let Survey = require('./Survey');

let UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null
    },

    lastName: {
        type: String,
        default: null
    },

    email: {
        type: String,
        default: null
    },

    password: {
        type: String,
        default: null
    },

    activities: {
        type: [ Activity ],
        default: []
    },

    surveys: {
        type: [ Survey ],
        default: [  ]
    },
});

module.exports = mongoose.model('UserSchema', UserSchema);
