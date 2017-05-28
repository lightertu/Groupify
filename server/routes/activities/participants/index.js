/**
 * Created by rui on 5/9/17.
 */

const express = require('express')
    , participantsRouter = express.Router({ mergeParams: true })
    , participantsControllers = require('./controllers')
    , authenticationMiddleware = require("../../../config/main").authenticationMiddleware;

// the second argument is the authentication middleware, has to be passed
participantsRouter.get('/'
                     , authenticationMiddleware
                     , participantsControllers.getAllParticipantsController);

participantsRouter.get('/survey'
                     , participantsControllers.getSurveyForParticipantsController);

participantsRouter.post('/'
                      , authenticationMiddleware
                      , participantsControllers.createParticipantController);

// route to regroup participants
participantsRouter.post('/regroup/:algorithmName'
                      , authenticationMiddleware
                      , participantsControllers.regroupParticipantsController);

// operations regarding to a specific activity
participantsRouter.get('/:participantId'
                     , authenticationMiddleware
                     , participantsControllers.getOneParticipantController);

participantsRouter.put('/:participantId'
                     , authenticationMiddleware
                     , participantsControllers.updateParticipantController);

participantsRouter.delete('/:participantId'
                     , authenticationMiddleware
                     , participantsControllers.deleteParticipantController);

participantsRouter.put('/:participantId/groupNumber'
                     , authenticationMiddleware
                     , participantsControllers.updateParticipantGroupNumberController);




module.exports = participantsRouter;
