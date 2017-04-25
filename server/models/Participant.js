/**
 * Created by rui on 4/24/17.
 */
let mongoose = require('mongoose');

let Participant = new mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },

    // https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
    image: {
        data: Buffer,
        contentType: String
    },

    // using an object is because we might add other properties to skill say, level of skill
    skills: {
        type: [{name: String}],
        default: [],
    },

    groupNumber: {
        type: Number,
        default: -1,
    },

    //http://stackoverflow.com/questions/28514790/how-to-set-limit-for-array-size-in-mongoose-schema
    availability: {
        type: [Boolean],
        default: [false, false, false, false, false, false, false],
        validate: [(week) => ( week.length === 7 ), '{PATH} a week has 7 days']
    }
});

module.exports = mongoose.model('StudentSchema', Participant);
