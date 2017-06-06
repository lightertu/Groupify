/**
 * Created by rui on 5/9/17.
 */

const passport = require('passport');

module.exports = {
    'secret': 'asdawldjal',
    databaseUrl: 'mongodb://teamdivider:CIS4222017@ds137101.mlab.com:37101/teamdivider',
    authenticationMiddleware: passport.authenticate('jwt', { session: false }),
    SENDGRID_API_KEY: "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",
};
