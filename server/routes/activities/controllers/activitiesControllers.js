/**
 * Created by rui on 5/9/17.
 */

const getAllActivitiesController = require("./getAllActivitiesController");
const createActivityController   = require("./createActivityController");
const getOneActivityController   = require("./getOneActivityController ");
const deleteActivityController   = require("./deleteActivityController");
const updateActivityController   = require("./updateActivityController");

module.exports = {
    // get a list of activity of a user
    getAllActivitiesController,

    // create an activity
    createActivityController,

    // get one activity
    getOneActivityController,

    // delete one activity
    deleteActivityController,


    //update one activity
    updateActivityController,
};
