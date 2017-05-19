/**
 * Created by rui on 5/9/17.
 */
const getAllParticipantsController = require('./getAllParticipantsController');
const createParticipantController = require('./createParticipantController');
const deleteParticipantController = require('./deleteParticipantController');
const getOneParticipantController = require('./getOneParticipantController');
const regroupParticipantsController = require('./regroupParticipantsController');
const updateParticipantController = require('./updateParticipantController');
const updateParticipantGroupNumberController = require('./updateParticipantGroupNumberController');


module.exports = {
    getAllParticipantsController,
    createParticipantController,
    deleteParticipantController,
    getOneParticipantController,
    regroupParticipantsController,
    updateParticipantController,
    updateParticipantGroupNumberController,
};