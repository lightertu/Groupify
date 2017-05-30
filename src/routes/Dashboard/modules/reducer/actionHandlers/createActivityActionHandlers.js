/**
 * Created by rui on 5/23/17.
 * Updated by Matt on 5/29/17
 */
let handleCreateActivity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isCreating'], true);
    return newState;
}

let handleCreateActivityFailure = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isCreating'], false);
    return newState;
}

let handleCreateActivitySuccess = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isCreating'], false);
    newState = state.setIn(['activitiesViewData', 'openCreateModal'], false);
    return newState;
}

export {
    handleCreateActivity,
    handleCreateActivitySuccess,
    handleCreateActivityFailure
}
