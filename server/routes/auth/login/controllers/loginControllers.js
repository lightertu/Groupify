/**
 * Created by rui on 5/9/17.
 */
// change res.send to res.json

const jwt = require("jsonwebtoken");
const config = require("../../../../config/main");
const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

let expireTime = 12000000000000; // token expire time; unit: second

function loginController (req, res) {
    const payload = req.body;

    // TODO: check if the "email" and "password" exits in payload and the format is valid
    function validateInput(payload) {
        if (!payload.email || !payload.password) {
            return false;
        }
        return true;
    }

    if (!validateInput(payload)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    User.findOne({ email: payload.email })
        .exec()
        .then(
            function(user) {
                // if user not found by the email
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
                        const errorMessage = "Password doesn't match"
                        createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
                    }
                });
            }
        )
        .catch( createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR) );
}

module.exports = loginController;
