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
                     , participantsControllers.getParticipantsController);

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
                     , participantsControllers.getParticipantController);

participantsRouter.put('/:participantId'
                     , authenticationMiddleware
                     , participantsControllers.updateParticipantController);

participantsRouter.delete('/:participantId'
                     , authenticationMiddleware
                     , participantsControllers.deleteParticipantController);

module.exports = participantsRouter;
