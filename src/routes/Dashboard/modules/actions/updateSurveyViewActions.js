/**
 * Created by Matt on 5/26/17.
 */

/** SURVEY VIEW CREATE ACTIONS **/
export const UPDATE_SURVEY_VIEW_OPEN_CREATE_MODAL = "UPDATE_SURVEY_VIEW_OPEN_CREATE_MODAL";
let updateSurveyViewOpenCreateModal  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_OPEN_CREATE_MODAL, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_IS_CREATING = "UPDATE_SURVEY_VIEW_IS_CREATING";
let updateSurveyViewIsCreating  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_IS_CREATING, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_FAILED_TO_CREATE = "UPDATE_SURVEY_VIEW_FAILED_TO_CREATE";
let updateSurveyFailedToCreate  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_FAILED_TO_CREATE, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_CREATE_ERROR = "UPDATE_SURVEY_VIEW_CREATE_ERROR";
let updateSurveyCreateError  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_CREATE_ERROR, payload: payload});

    }

}

/** SURVEY VIEW EDIT ACTIONS **/
export const UPDATE_SURVEY_VIEW_OPEN_EDIT_MODAL = "UPDATE_SURVEY_VIEW_OPEN_EDIT_MODAL";
let updateSurveyViewOpenEditModal  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_OPEN_EDIT_MODAL, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_IS_EDITING = "UPDATE_SURVEY_VIEW_IS_EDITING";
let updateSurveyViewIsEditing  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_IS_EDITING, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_FAILED_TO_EDIT = "UPDATE_SURVEY_VIEW_FAILED_TO_EDIT";
let updateSurveyFailedToEdit  = (dispatch) =>      {

    return (payload) => {
updateSurveyCreateError
        dispatch({type: UPDATE_SURVEY_VIEW_FAILED_TO_EDIT, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_EDIT_ERROR = "UPDATE_SURVEY_VIEW_EDIT_ERROR";
let updateSurveyEditError  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_EDIT_ERROR, payload: payload});

    }

}

/** SURVEY VIEW DELETE ACTIONS **/
export const UPDATE_SURVEY_VIEW_OPEN_DELETE_MODAL = "UPDATE_SURVEY_VIEW_OPEN_DELETE_MODAL";
let updateSurveyViewOpenDeleteModal  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_OPEN_DELETE_MODAL, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_IS_DELETING = "UPDATE_SURVEY_VIEW_IS_DELETING";
let updateSurveyViewIsDeleting  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_IS_DELETING, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_FAILED_TO_DELETE = "UPDATE_SURVEY_VIEW_FAILED_TO_DELETE";
let updateSurveyFailedToDelete  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_FAILED_TO_DELETE, payload: payload});

    }

}

export const UPDATE_SURVEY_VIEW_DELETE_ERROR = "UPDATE_SURVEY_VIEW_DELETE_ERROR";
let updateSurveyDeleteError  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_VIEW_DELETE_ERROR, payload: payload});

    }

}



export {
    updateSurveyViewOpenCreateModal, 
    updateSurveyViewIsCreating,
    updateSurveyFailedToCreate,  
    updateSurveyCreateError,

    updateSurveyViewOpenEditModal, 
    updateSurveyViewIsEditing,
    updateSurveyFailedToEdit,  
    updateSurveyEditError,

    updateSurveyViewOpenDeleteModal, 
    updateSurveyViewIsDeleting,
    updateSurveyFailedToDelete,  
    updateSurveyDeleteError,

}
