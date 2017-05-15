/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , activitiesRouter = express.Router()
    , activitiesControllers = require('./controllers')
    , authenticationMiddleware = require("../../config/main").authenticationMiddleware;

// the second argument is the authentication middleware, has to be passed
console.log(activitiesControllers.getAllActivitiesController);
activitiesRouter.get('/', authenticationMiddleware, activitiesControllers.getAllActivitiesController);
activitiesRouter.post('/', authenticationMiddleware, activitiesControllers.createActivityController);

// operations regarding to a specific activity
activitiesRouter.get('/:activityId', authenticationMiddleware, activitiesControllers.getOneActivityController);
activitiesRouter.put('/:activityId', authenticationMiddleware, activitiesControllers.updateActivityController);
activitiesRouter.delete('/:activityId', authenticationMiddleware, activitiesControllers.deleteActivityController);

activitiesRouter.use('/:activityId/participants', require('./participants'));

module.exports = activitiesRouter;
