let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = Schema({
    image: {
        data: Buffer,
        contentType: String
    },

    name: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        default: ""
    },

    password: {
        type: String,
        default: null
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

module.exports = mongoose.model('User', UserSchema);
