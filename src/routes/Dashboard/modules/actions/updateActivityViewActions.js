/**
 * Created by Matt on 5/26/17.
 */

/** ACTIVITY VIEW CREATE ACTIONS **/
export const UPDATE_ACTIVITY_VIEW_OPEN_CREATE_MODAL = "UPDATE_ACTIVITY_VIEW_OPEN_CREATE_MODAL";
let updateActivityViewOpenCreateModal  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_OPEN_CREATE_MODAL, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_IS_CREATING = "UPDATE_ACTIVITY_VIEW_IS_CREATING";
let updateActivityViewIsCreating  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_IS_CREATING, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_FAILED_TO_CREATE = "UPDATE_ACTIVITY_VIEW_FAILED_TO_CREATE";
let updateActivityFailedToCreate  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_FAILED_TO_CREATE, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_CREATE_ERROR = "UPDATE_ACTIVITY_VIEW_CREATE_ERROR";
let updateActivityCreateError  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_CREATE_ERROR, payload: payload});

    }

}

/** ACTIVITY VIEW EDIT ACTIONS **/
export const UPDATE_ACTIVITY_VIEW_OPEN_EDIT_MODAL = "UPDATE_ACTIVITY_VIEW_OPEN_EDIT_MODAL";
let updateActivityViewOpenEditModal  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_OPEN_EDIT_MODAL, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_IS_EDITING = "UPDATE_ACTIVITY_VIEW_IS_EDITING";
let updateActivityViewIsEditing  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_IS_EDITING, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_FAILED_TO_EDIT = "UPDATE_ACTIVITY_VIEW_FAILED_TO_EDIT";
let updateActivityFailedToEdit  = (dispatch) =>      {

    return (payload) => {
updateActivityCreateError
        dispatch({type: UPDATE_ACTIVITY_VIEW_FAILED_TO_EDIT, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_EDIT_ERROR = "UPDATE_ACTIVITY_VIEW_EDIT_ERROR";
let updateActivityEditError  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_EDIT_ERROR, payload: payload});

    }

}

/** ACTIVITY VIEW DELETE ACTIONS **/
export const UPDATE_ACTIVITY_VIEW_OPEN_DELETE_MODAL = "UPDATE_ACTIVITY_VIEW_OPEN_DELETE_MODAL";
let updateActivityViewOpenDeleteModal  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_OPEN_DELETE_MODAL, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_IS_DELETING = "UPDATE_ACTIVITY_VIEW_IS_DELETING";
let updateActivityViewIsDeleting  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_IS_DELETING, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_FAILED_TO_DELETE = "UPDATE_ACTIVITY_VIEW_FAILED_TO_DELETE";
let updateActivityFailedToDelete  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_FAILED_TO_DELETE, payload: payload});

    }

}

export const UPDATE_ACTIVITY_VIEW_DELETE_ERROR = "UPDATE_ACTIVITY_VIEW_DELETE_ERROR";
let updateActivityDeleteError  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_VIEW_DELETE_ERROR, payload: payload});

    }

}



export {
    updateActivityViewOpenCreateModal, 
    updateActivityViewIsCreating,
    updateActivityFailedToCreate,  
    updateActivityCreateError,

    updateActivityViewOpenEditModal, 
    updateActivityViewIsEditing,
    updateActivityFailedToEdit,  
    updateActivityEditError,

    updateActivityViewOpenDeleteModal, 
    updateActivityViewIsDeleting,
    updateActivityFailedToDelete,  
    updateActivityDeleteError,

}
