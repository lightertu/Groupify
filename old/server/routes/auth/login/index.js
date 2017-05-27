/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , loginRouter = express.Router()
    , loginControllers = require('./controllers');

loginRouter.post('/', loginControllers.loginController);

module.exports = loginRouter;