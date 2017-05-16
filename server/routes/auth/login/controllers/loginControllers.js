/**
 * Created by rui on 5/9/17.
 */
// change res.send to res.json

const jwt = require("jsonwebtoken");
const config = require("../../../../config/main");
const User = require("../../../../models/").User;

let expireTime = 12000000000000; // token expire time; unit: second

module.exports = {
    loginController: function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, user){
            if (err) throw err;

            if (!user) {
                res.json({
                    success: false,
                    message: 'Authentication failed. User not found'
                })
            } else {
                // check if password matches
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (isMatch && !err) {
                        // create the token
                        let token = jwt.sign(
                            {   _id  : user._id,
                                email: user.email,
                            },
                            config.secret, { expiresIn: expireTime}
                        );
                        res.json({success: true, token: 'JWT ' + token})
                    }
                    else {
                        res.json({
                            success: false,
                            message: 'Authentication failed, password did not match. '
                        });
                    }
                });
            }
        })
    },

    // more here
};
