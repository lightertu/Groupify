/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , userRouter = express.Router({ mergeParams: true })
    , userControllers = require('./controllers')
    , authenticationMiddleware = require("../../../config/main").authenticationMiddleware;

userRouter.get('/'
             , authenticationMiddleware
             , userControllers.getUserProfileController);

userRouter.put('/'
             , authenticationMiddleware
             , userControllers.updateUserProfileController);

module.exports = userRouter;
