/**
 * Created by rui on 5/9/17.
 */


const HttpStatus = require("http-status-codes");
const bcrypt = require('bcryptjs');

const User = require("../../../../models/").User;
const UserLoginInfoValidator = require("../../../../models/").UserLoginInfoValidator;
const createErrorHandler = require("../../../utils").createErrorHandler;

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

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);

}


function resetpasswordController (req, res) {
    const user    = req.user;
    const payload = req.body;

    // check if payload is validate
    if (!validateInput(payload, properties)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    // create hashed password
    const hashedPassword = hashPassword(payload.password);

    User.findOneAndUpdate(
        {
            _id: user._id, email: payload.email, isDeleted: false
        },
        {
            $set: {
                "password": hashedPassword,
                "lastModifiedTime": Date.now(),
            }
        },
        {
            new: true,
        }
    )
        .exec()
        .then(function (user) {
            if (user === null) {
                const errorMessage = "Wrong email, and also you cannot access other user's account";
                return createErrorHandler(res, HttpStatus.FORBIDDEN)(errorMessage);
            }
            return res.status(HttpStatus.ACCEPTED).json({
                user: user.getPublicFields()
                // user: user
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

}


module.exports = resetpasswordController;
