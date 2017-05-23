/**
 * Created by rui on 5/9/17.
 */


const jwt = require("jsonwebtoken");
const HttpStatus = require("http-status-codes");

const config = require("../../../../config/main");
const User = require("../../../../models/").User;
const UserLoginInfoValidator = require("../../../../models/").UserLoginInfoValidator;
const createErrorHandler = require("../../../utils").createErrorHandler;


const expireTime = 12000000000000; // token expire time; unit: second
const properties = ['email', 'password'];


function validateInput(payload, properties) {
    return validateFormat(payload, properties)
        && UserLoginInfoValidator(payload.email, payload.password);
}


function validateFormat(payload, properties){
    let result = true;
    properties.forEach(function (property) {
        result = result && payload.hasOwnProperty(property);
    });
    return result;
}

function loginController (req, res) {
    const payload = req.body;

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


module.exports = loginController;
