/**
 * Created by rui on 5/9/17.
 */

const passport = require('passport');

module.exports = {
    'secret': 'asdawldjal',
     databaseUrl: 'mongodb://teamdivider:CIS4222017@ds137101.mlab.com:37101/teamdivider',
     authenticationMiddleware: passport.authenticate('jwt', { session: false }),
};
