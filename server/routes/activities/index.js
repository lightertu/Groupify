/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , activitiesRouter = express.Router()
    , activitiesControllers = require('./controllers');

activitiesRouter.get('/', activitiesControllers.getActivitiesController);
activitiesRouter.post('/', activitiesControllers.createActivityController);

module.exports = activitiesRouter;