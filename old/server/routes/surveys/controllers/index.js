/**
 * Created by Matt And Kai on 5/23/17.
 */

const getAllSurveysController = require("./getAllSurveysController");
const createSurveyController   = require("./createSurveyController");
const getOneSurveyController   = require("./getOneSurveyController");
const deleteSurveyController   = require("./deleteSurveyController");
const updateSurveyController   = require("./updateSurveyController");

const surveysControllers = {
    // create an survey
    createSurveyController,

    // get a list of survey of a user
    getAllSurveysController,

    // get one survey
    getOneSurveyController,

    // delete one survey
    deleteSurveyController,

    //update one survey
    updateSurveyController
};

module.exports = surveysControllers;
