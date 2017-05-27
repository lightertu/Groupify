/**
 * Created by rui on 5/9/17.
 */
const updateUserProfileController = require('./updateUserProfileController');
const getUserProfileController    = require('./getUserProfileController');

let profileControllers = {
    getUserProfileController,
    updateUserProfileController,
}

module.exports = profileControllers;
