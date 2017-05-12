/**
 * Created by rui on 5/9/17.
 */
const passport = require('passport');

const express = require('express')
    , resetpasswordRouter = express.Router()
    , resetpasswordControllers = require('./controllers');

resetpasswordRouter.post('/', passport.authenticate('jwt', {session: false}), resetpasswordControllers.resetpasswordController);

module.exports = resetpasswordRouter;
