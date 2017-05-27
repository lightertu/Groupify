/**
 * Created by Matt And Kai on 5/23/17.
 */

const express = require('express')
    , surveysRouter = express.Router()
    , surveysControllers = require('./controllers')
    , authenticationMiddleware = require("../../config/main").authenticationMiddleware;

// the second argument is the authentication middleware, has to be passed
surveysRouter.get('/', authenticationMiddleware, surveysControllers.getAllSurveysController);
surveysRouter.post('/', authenticationMiddleware, surveysControllers.createSurveyController);

// operations regarding to a specific survey
surveysRouter.get('/:surveyId', authenticationMiddleware, surveysControllers.getOneSurveyController);
surveysRouter.put('/:surveyId', authenticationMiddleware, surveysControllers.updateSurveyController);
surveysRouter.delete('/:surveyId', authenticationMiddleware, surveysControllers.deleteSurveyController);

module.exports = surveysRouter;
