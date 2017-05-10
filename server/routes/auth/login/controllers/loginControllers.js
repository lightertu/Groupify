/**
 * Created by rui on 5/9/17.
 */
const jwt = require("jsonwebtoken");
const config = require("../../../../config/main");
const User = require("../../../../models/").User;

module.exports = {
    loginController: function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, user){
            if (err) throw err;

            if (!user) {
                res.send({
                    success: false,
                    message: 'Authentication failed. User not found'
                })
            } else {
                // check if password matches
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (isMatch && !err) {
                        // create the token
                        let token = jwt.sign(user, config.secret, {
                            //userId: user._id,   // save the id in the JWT
                            expiresIn: 10080 // in second, this is a week
                        });

                        res.json({success: true, token: 'JWT ' + token})
                    } else {
                        res.send({
                            success: false,
                            message: 'Authentication failed, password didnot match. '
                        });
                    }
                });
            }
        })
    },

    // more here
};
