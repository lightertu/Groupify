const HttpStatus = require("http-status-codes");


function getUserProfileController (req, res, next){
    // don't need Input check here
    let user = req.user;
    res.status(HttpStatus.OK).json(user.getPublicFields());
}

module.exports = getUserProfileController;
