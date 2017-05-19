/**
 * Created by rui on 5/9/17.
 */
const HttpStatus = require("http-status-codes");
const validator = require('validator');

const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;


function signupController (req, res){
    const payload = req.body;
    const properties = ['email', 'password'];

    // check if payload is validate
    if (!validateInput(payload, properties)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }


    const newUser = new User({
        email: payload.email,
        password: payload.password,
    });

    newUser.save()
        .then(
            function (user){
                if (user === null){
                    const errorMessage = "After save the new user, user === null";
                    return createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR) (errorMessage);
                }
                res.status(HttpStatus.CREATED).json(user.getPublicFields());
            }
        )
        .catch(
            function (err) {
                const errorMessage = "Not Accept duplicate email";
                createErrorHandler(res, HttpStatus.NOT_ACCEPTABLE) (errorMessage);
            }
        );

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

module.exports = signupController;
