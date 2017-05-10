/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , activitiesRouter = express.Router()
    , activitiesControllers = require('./controllers')
    , authenticationMiddleware = require("../../config/main").authenticationMiddleware;

// the second argument is the authentication middleware, has to be passed
activitiesRouter.get('/', authenticationMiddleware, activitiesControllers.getActivitiesController);
activitiesRouter.post('/', authenticationMiddleware, activitiesControllers.createActivityController);

module.exports = activitiesRouter;