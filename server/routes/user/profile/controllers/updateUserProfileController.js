const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

function updateUserProfileController (req, res, next){
    let payload = req.body;

    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput(payload) {
        return true;
    }
    // save a new activity to to the database
    if (!validateInput(payload)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
           $set: {
               "name"               : payload.name,
               // "image"              : payload.image,
               "lastModifiedTime"   : Date.now(),
           }
        },
        { new: true }
    ).exec()
        .then(
            function(user){
                if (user === null){
                    const errorMessage = "Token passed, but cannot find user in DB when updating User"
                                            + req.user._id;
                    return createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR) (errorMessage);
                }
                return res.json( user.getPublicFields() );
            }
        )
        .catch( createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR) );
}

module.exports = updateUserProfileController;
