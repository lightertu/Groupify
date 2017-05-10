/**
 * Created by rui on 5/9/17.
 */

const User = require("../../../../models/").User;

module.exports = {
    signupController: function(req, res) {
        if (!req.body.email || !req.body.password) {
            res.json({
                success: false,
                message: 'please enter an email and password to register'
            })
        } else {
            let newUser = new User({
                email: req.body.email,
                password: req.body.password,
            });

            // try to save the new user
            newUser.save(function(err) {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'that email address already exists'
                    })
                }

                res.json({
                    success: true,
                    message: 'successful created new user.'
                })
            })
        }
    },
};
