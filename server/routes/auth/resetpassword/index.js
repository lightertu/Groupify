/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , resetpasswordRouter = express.Router()
    , resetpasswordControllers = require('./controllers');

resetpasswordRouter.post('/', resetpasswordControllers.resetpasswordController);

module.exports = resetpasswordRouter;
