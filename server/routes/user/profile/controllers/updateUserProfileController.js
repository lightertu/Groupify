const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

function updateUserProfileController (req, res, next){
    let user    = req.user;
    let success = true;
    let message = 'User profile is successfully updated';

    if (req.body.name !== null){
        user.name = req.body.name;
        user.save(function(err){
            let errMessage = 'User name is unable to update';
            if (err) {
                success = false;
                message = errMessage;
            }
        });
    }

    if (req.body.image !== null){
        user.image = req.body.image;
        user.save(function(err){
            let errMessage = 'User image is unable to update';
            if (err){
                message = (success === false) ? (message + " and " + errMessage) : (errMessage);
                success = false;
            }
        });
    }

    res.json({
        success: success,
        message: message,
    });
}

module.exports = updateUserProfileController;
