/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , authRouter = express.Router();

authRouter.use('/login', require('./login'));
authRouter.use('/signup', require('./signup'));

module.exports = authRouter;