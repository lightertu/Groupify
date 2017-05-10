/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , authRouter = express.Router()
    , authControllers = require('./controllers');

authRouter.post('/login', authControllers.loginController);
authRouter.post('/signup', authControllers.signupController);

module.exports = authRouter;