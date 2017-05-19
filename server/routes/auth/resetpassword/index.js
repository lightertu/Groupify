/**
 * Created by rui on 5/9/17.
 */
const passport = require('passport');

const express = require('express')
    , resetpasswordRouter = express.Router()
    , resetpasswordControllers = require('./controllers')
    , authenticationMiddleware = require("../../../config/main").authenticationMiddleware;

resetpasswordRouter.put('/', authenticationMiddleware, resetpasswordControllers.resetpasswordController);

module.exports = resetpasswordRouter;
