/**
 * Created by rui on 5/9/17.
 */

const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

function signupController (req, res){
    const payload = req.body;

    // TODO: check if the all the inputs including url parameters and payload is valid
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

module.exports = signupController;
