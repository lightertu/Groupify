/**
 * Created by rui on 5/9/17.
 */
module.exports = {
    getUserProfileController: function(req, res, next) {
        res.send("get user profile");
    },

    updateUserProfileController: function(req, res, next) {
        res.send("updated user profile");
    },
};
