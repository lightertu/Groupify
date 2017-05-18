/**
 * Created by rui on 5/9/17.
 */


const jwt = require("jsonwebtoken");
const HttpStatus = require("http-status-codes");
const validator = require('validator');

const config = require("../../../../config/main");
const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;

let expireTime = 12000000000000; // token expire time; unit: second


function loginController (req, res) {
    const payload = req.body;
    const properties = ['email', 'password'];

    // check if payload is validate
    if (!validateInput(payload, properties)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    User.findOne({ email: payload.email })
        .exec()
        .then(
            function (user) {
                // check if the user email has been found
                if (user === null){
                    const errorMessage = "Cannot find user by its email in the database";
                    createErrorHandler(res, HttpStatus.NOT_FOUND) (errorMessage);
                    return;
                }
                // check if the password matched
                user.comparePassword(payload.password, function (err, isMatch){
                    if (isMatch && !err) {
                        // create the token
                        let token = jwt.sign(
                            {  _id  : user._id  }, config.secret, { expiresIn: expireTime}
                        );
                        res.status(HttpStatus.ACCEPTED).json({token: 'JWT ' + token})
                    }
                    else {
                        const errorMessage = "Password doesn't match";
                        createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
                    }
                });
            }
        )
        .catch( createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR) );
}


function validateInput(payload, properties) {
    return validateFormat(payload, properties)
        && validateEmail(payload.email)
        && validatePassword(payload.password);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}

function validateEmail(email){
    return typeof email === 'string' && validator.isEmail(email);
}

function validatePassword(password){
    return typeof password === 'string';
}


module.exports = loginController;
