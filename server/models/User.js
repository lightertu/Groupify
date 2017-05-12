const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        lowercase: true,
        unique: true,
        required: true,
        default: ""
    },

    password: {
        type: String,
        default: null,
        required: true,
    },

    // every model has this
    isDeleted: {
        type: Boolean,
        required: true,
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
        required: true
    }
});


/* hash password before user saves the password */
UserSchema.pre('save', function(next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }

                user.password = hash;
            });
        });
    }

    // update time
    if (this.isNew){
        user.createdAt = Date.now;
    }
    user.lastModifiedTime = Date.now;

    return next();
});

// /* change "lastModifiedTime" before user updates the password
// *  and hash password before user update the password
// * */
// UserSchema.pre('update', function(next) {
//     let user = this;
//     console.log(this);
//     user.lastModifiedTime = Date.now;
//     if (this.isModified('password')){
//         bcrypt.genSalt(10, function(err, salt) {
//             if (err) {
//                 return next(err);
//             }
//
//             bcrypt.hash(user.password, salt, function(err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//
//                 user.password = hash;
//                 next();
//
//             });
//         });
//     }
//     else{
//         return next();
//     }
// });

/* compare password if user login */
UserSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
