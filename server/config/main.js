/**
 * Created by rui on 5/9/17.
 */

const passport = require('passport');

module.exports = {
    'secret': 'asdawldjal',
    databaseUrl: 'mongodb://localhost:27017/teamdivider',
    authenticationMiddleware: passport.authenticate('jwt', { session: false }),
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
};
