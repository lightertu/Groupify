/**
 * Created by rui on 5/9/17.
 */
// const activitiesControllers = require('./activitiesControllers');

const getAllActivitiesController = require("./getAllActivitiesController");
const createActivityController   = require("./createActivityController");
const getOneActivityController   = require("./getOneActivityController");
const deleteActivityController   = require("./deleteActivityController");
const updateActivityController   = require("./updateActivityController");
const lockGroupInCertainActivityController = require("./lockGroupInCertainActivityController");
const unlockGroupInCertainActivityController = require("./unlockGroupInCertainActivityController")

const activitiesControllers = {
    // create an activity
    createActivityController,

    // get a list of activity of a user
    getAllActivitiesController,

    // get one activity
    getOneActivityController,

    // delete one activity
    deleteActivityController,

    //update one activity
    updateActivityController,

    // lock an group
    lockGroupInCertainActivityController,

    // unlock an group
    unlockGroupInCertainActivityController
};

module.exports = activitiesControllers;
