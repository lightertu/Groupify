/**
 * Created by rui on 5/9/17.
 */

const passport = require('passport');


module.exports = {
    'secret': 'asdawldjal',
    databaseUrl: 'mongodb://teamdivider:CIS4222017@ds137101.mlab.com:37101/teamdivider',
    authenticationMiddleware: passport.authenticate('jwt', { session: false }),
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
};

process.env.SENDGRID_API_KEY ? console.log('sendgrid API key found') : console.log('sendgrid API key not found, you will not be able to send emails. You must export the key to the enviroment variable SENDGRID_API_KEY')
