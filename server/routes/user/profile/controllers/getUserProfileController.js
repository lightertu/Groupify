const User = require("../../../../models/").User;
const createErrorHandler = require("../../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");


function getUserProfileController (req, res, next){
    // don't need Input check here
    let user = req.user;
    res.status(200).json(user.getPublicFields());
}

module.exports = getUserProfileController;
