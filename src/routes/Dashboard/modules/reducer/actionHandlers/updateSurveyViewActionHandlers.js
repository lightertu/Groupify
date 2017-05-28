/**
 * Created by Matt on 5/26/17.
 */

import {Map, List, Set, OrderedSet} from 'immutable';

/** Create Action Handlers  **/
let handleUpdateSurveyViewOpenCreateModal = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'openCreateModal'], payload);
    return newState;
}

let handleUpdateSurveyViewIsCreating = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isCreating'], payload);
    return newState;
}

let handleUpdateSurveyViewFailedToCreate = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'failedToCreate'], payload);
    return newState;
}

let handleUpdateSurveyViewCreateError = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'createError'], payload);
    return newState;
}

/** Edit Action Handlers  **/
let handleUpdateSurveyViewOpenEditModal = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'openEditModal'], payload);
    return newState;
}

let handleUpdateSurveyViewIsEditing = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isEditing'], payload);
    return newState;
}

let handleUpdateSurveyViewFailedToEdit = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'failedToEdit'], payload);
    return newState;
}

let handleUpdateSurveyViewEditError = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'editError'], payload);
    return newState;
}

/** Delete Action Handlers  **/
let handleUpdateSurveyViewOpenDeleteModal = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'openDeleteModal'], payload);
    return newState;
}

let handleUpdateSurveyViewIsDeleting = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isDeleting'], payload);
    return newState;
}

let handleUpdateSurveyViewFailedToDelete = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'failedToDelete'], payload);
    return newState;
}

let handleUpdateSurveyViewDeleteError = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'deleteError'], payload);
    return newState;
}

export {
    handleUpdateSurveyViewOpenCreateModal,
    handleUpdateSurveyViewIsCreating,
    handleUpdateSurveyViewFailedToCreate,
    handleUpdateSurveyViewCreateError,

    handleUpdateSurveyViewOpenEditModal, 
    handleUpdateSurveyViewIsEditing,
    handleUpdateSurveyViewFailedToEdit,
    handleUpdateSurveyViewEditError,

    handleUpdateSurveyViewOpenDeleteModal,
    handleUpdateSurveyViewIsDeleting,
    handleUpdateSurveyViewFailedToDelete,
    handleUpdateSurveyViewDeleteError, 
}
