/**
 * Created by Matt on 5/29/17.
 */

export const UPDATE_ACTIVITY_HOLDER_GET_ACTIVITY = "UPDATE_ACTIVITY_HOLDER_GET_ACTIVITY";
let updateActivityHolderGetActivity  = (dispatch) =>      {

    return (payload) => {
        
        dispatch({type: UPDATE_ACTIVITY_HOLDER_GET_ACTIVITY, payload: payload});

    }

}

export const UPDATE_ACTIVITY_HOLDER_SET_ID = "UPDATE_ACTIVITY_HOLDER_SET_ID";
let updateActivityHolderSetId  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_HOLDER_SET_ID, payload: payload});

    }

}

export const UPDATE_ACTIVITY_HOLDER_SET_TITLE = "UPDATE_ACTIVITY_HOLDER_SET_TITLE";
let updateActivityHolderSetTitle  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_HOLDER_SET_TITLE, payload: payload});

    }

}

export const UPDATE_ACTIVITY_HOLDER_SET_TOTAL_CAPACITY = "UPDATE_ACTIVITY_HOLDER_SET_TOTAL_CAPACITY";
let updateActivityHolderSetTotalCapacity  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_HOLDER_SET_TOTAL_CAPACITY, payload: payload});

    }

}

export const UPDATE_ACTIVITY_HOLDER_SET_GROUP_CAPACITY = "UPDATE_ACTIVITY_HOLDER_SET_GROUP_CAPACITY";
let updateActivityHolderSetGroupCapacity  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_HOLDER_SET_GROUP_CAPACITY, payload: payload});

    }

}

export const UPDATE_ACTIVITY_HOLDER_SET_CURRENT_CAPACITY = "UPDATE_ACTIVITY_HOLDER_SET_CURRENT_CAPACITY";
let updateActivityHolderSetCurrentCapacity  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_HOLDER_SET_CURRENT_CAPACITY, payload: payload});

    }

}

export const UPDATE_ACTIVITY_HOLDER_SET_END_DATE = "UPDATE_ACTIVITY_HOLDER_SET_END_DATE";
let updateActivityHolderSetEndDate  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_ACTIVITY_HOLDER_SET_END_DATE, payload: payload});

    }

}

export {
    updateActivityHolderGetActivity,
    updateActivityHolderSetId,
    updateActivityHolderSetTitle,

    updateActivityHolderSetTotalCapacity,
    updateActivityHolderSetGroupCapacity, 
    updateActivityHolderSetCurrentCapacity,
    updateActivityHolderSetEndDate, 
}
