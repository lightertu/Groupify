/**
 * Created by rui on 5/9/17.
 */
const PassportJwt = require('passport-jwt');
const JwtStrategy = PassportJwt.Strategy;
const ExtractJwt = PassportJwt.ExtractJwt;
const User = require('../models').User;
let config = require('../config/main');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        // TODO: need to know how does findone behaves it seems to be really buggy
        User.findOne({_id: jwt_payload._doc._id}).exec()
            .then(function (user) {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
            .catch(function (err) {
                if (err) {
                    return done(err, false);
                }
            });
    }));
};