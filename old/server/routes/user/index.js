/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , userRouter = express.Router();

userRouter.use('/profile', require('./profile'));

module.exports = userRouter;