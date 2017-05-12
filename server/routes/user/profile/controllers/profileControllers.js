/**
 * Created by rui on 5/9/17.
 */

const jwtDecode = require('jwt-decode');

module.exports = {
    getUserProfileController: function(req, res, next) {
        res.json({
            name : req.user.name,
            email: req.user.email,
            createAt: req.user.createdAt,
            lastModified: req.user.lastModifiedTime,
        });
    },

    updateUserProfileController: function(req, res, next) {
        // let keys = Object.keys(req.body);
        let user    = req.user;
        let success = true;
        let message = 'User profile is successfully updated';

        if (req.body.name != null){
            user.name = req.body.name;
            user.save(function(err){
                let errMessage = 'User name is unable to update';
                if (err) {
                    success = false;
                    message = errMessage;
                }
            });
        }

        if (req.body.image != null){
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

    },
};

