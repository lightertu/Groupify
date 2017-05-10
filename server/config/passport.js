/**
 * Created by rui on 5/9/17.
 */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models').User;
let config = require('../config/main');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        // need to know how does findone behaves it seems to be really buggy
        // implement promise instead of call back
        User.findOne({_id: jwt_payload._doc._id}).exec()
            .then(function (user) {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
            .catch(function(err){
                if (err) {
                    return done(err, false);
                }
            });
    }));
};