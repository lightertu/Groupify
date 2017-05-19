const HttpStatus = require("http-status-codes");

const User = require("../../../../models/").User;
const UserProfileValidator = require("../../../../models/").UserProfileValidator;
const createErrorHandler = require("../../../utils").createErrorHandler;


const properties = ['name', 'image'];


function validateInput(payload, properties) {
    return validateFormat(payload, properties)
        && UserProfileValidator(payload.name, payload.image);
}


function validateFormat(payload, properties){
    let result = true;
    properties.forEach(function (property) {
        result = result && payload.hasOwnProperty(property);
    });
    return result;
}


module.exports = function (req, res, next){
    const payload = req.body;

    // save a new activity to to the database
    if (!validateInput(payload, properties)) {
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
};
