/**
 * Created by rui on 5/9/17.
 */
const User = require("../../../../models/").User;

const jwt = require("jsonwebtoken");
const config = require("../../../../config/main");
const bcrypt = require('bcryptjs');

let expireTime = 300; // token expire time

module.exports = {
    resetpasswordController: function(req, res) {
        if (!req.body.email || !req.body.password) {
            res.json({
                success: false,
                message: 'please enter an email and password to reset',
            });
        }
        else{
            User.findOne({
                email: req.body.email
            }, function(err, user){
                if (err)  throw err;

                if (!user){
                    res.json({
                        success: false,
                        message: 'the email cannot be found in database',
                    });
                }
                else{
                    user.password = req.body.password;
                    user.save(function(){
                        if (err){
                            return res.json({
                                success: false,
                                message: err,
                            });
                        }

                        res.json({
                            success: true,
                            message: 'successfully reset the password',
                        });
                    });
                }


            });


        }

    },
};
