const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

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
        unique: true,
        lowercase: true,
        required: true,
        default: ""
    },


    // isNewOne: {
    //     type: Boolean,
    //     required: true,
    //     default: true,
    // },


    password: {
        type: String,
        // default: null,
        required: true,
    },

    // automatically sort this array based on its last modified data
    activities: {
        type: [{type: Schema.ObjectId, ref: "Activity"}],
    },

    surveys: {
        type: [{type: Schema.ObjectId, ref: "Survey"}],
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
        required: true
    }
});

/* hash password before user saves the password */
UserSchema.pre('save', function (next) {
    let user = this;

    // update time
    if (!this.isNew) {
        user.lastModifiedTime = Date.now();
    }

    // update hashed password if needed
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }

                user.password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});


/* compare password if user login */
UserSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

UserSchema.methods.getPublicFields = function () {
    return {
        name: this.name,
        image: this.image,
        email: this.email,
        activities: this.activities,
        surveys: this.surveys,
        lastModifiedTime: this.lastModifiedTime,
    }
};



function validateEmail(email){
    return typeof email === 'string' && validator.isEmail(email);
}

function validatePassword(password){
    return typeof password === 'string';
}

function validateName(name){
    return typeof name === 'string';
}

function validateImage(image) {
    return true;
}


function UserLoginInfoValidator(email, password) {
    return validateEmail(email) && validatePassword(password);
}

function UserProfileValidator(name, image) {
    return validateName(name) && validateImage(image);
}



module.exports = {
    User                   :   mongoose.model('User', UserSchema),
    UserProfileValidator   :   UserProfileValidator,
    UserLoginInfoValidator :   UserLoginInfoValidator,
};
