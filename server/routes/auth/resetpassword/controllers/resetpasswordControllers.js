/**
 * Created by rui on 5/9/17.
 */
const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

const bcrypt = require('bcryptjs');


function hashPassword(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);

}


function resetpasswordController (req, res) {
    let user    = req.user;
    let payload = req.body;

    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput(payload) {
        if (!payload.email || !payload.password) {
            return false;
        }
        return true;
    }
    // save a new activity to to the database
    if (!validateInput(payload)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    console.log(payload.password);

    // create hashed password
    const hashedPassword = hashPassword(payload.password);

    console.log(hashedPassword);
    console.log(typeof hashedPassword);
    console.log("abcasfdsfdsafasdfdasfsfasdfsafasdf");

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
                // user: user.getPublicFields()
                user: user
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

}

module.exports = resetpasswordController;
