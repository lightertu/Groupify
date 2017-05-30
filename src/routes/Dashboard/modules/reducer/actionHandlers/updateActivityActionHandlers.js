/**
 * Created by rui on 5/23/17.
 * Updated by Matt on 5/29/17
 */

let handleUpdateActivity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isEditing'], true); 
    return newState;
}

let handleUpdateActivityFailure = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isEditing'], false); 
    return newState;
}

let handleUpdateActivitySuccess = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isEditing'], false);
    newState = state.setIn(['activitiesViewData', 'openEditModal'], false);
    return newState;
}

export {
    handleUpdateActivity,
    handleUpdateActivitySuccess,
    handleUpdateActivityFailure
}
