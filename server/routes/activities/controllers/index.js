/**
 * Created by rui on 5/9/17.
 */
// const activitiesControllers = require('./activitiesControllers');

const getAllActivitiesController = require("./getAllActivitiesController");
const createActivityController   = require("./createActivityController");
const getOneActivityController   = require("./getOneActivityController");
const deleteActivityController   = require("./deleteActivityController");
const updateActivityController   = require("./updateActivityController");

let activitiesControllers = {
    // get a list of activity of a user
    getAllActivitiesController: getAllActivitiesController,

    // create an activity
    createActivityController: createActivityController,

    // get one activity
    getOneActivityController: getOneActivityController,

    // delete one activity
    deleteActivityController: deleteActivityController,

    //update one activity
    updateActivityController: updateActivityController,
}

module.exports = activitiesControllers;
