const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");


function validateInput(payload, properties) {
    return validateFormat(payload, properties)
        && validateName(payload.name)
        && validateImage(payload.image);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


function validateName(name){
    return typeof name === 'string';
}


// TODO: we need to some work to check the image data in "validateImage"
function validateImage(password){
    return true;
}


module.exports = function (req, res, next){
    const payload = req.body;
    const properties = ['name', 'image'];

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
