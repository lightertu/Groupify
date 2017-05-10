/**
 * Created by rui on 5/9/17.
 */

const PassportJwt = require('passport-jwt');
const JwtStrategy = PassportJwt.Strategy;
const ExtractJwt = PassportJwt.ExtractJwt;
const User = require('../models/User');
const config = require('../config/main');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) { return done(err, false); }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};
