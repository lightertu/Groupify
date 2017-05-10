/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , userRouter = express.Router()
    , userControllers = require('./controllers');

userRouter.get('/profile', userControllers.getUserProfileController);
userRouter.put('/profile', userControllers.updateUserProfileController);

module.exports = userRouter;