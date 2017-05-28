/**
 * Created by Matt on 5/23/17.
 */

let handleUpdateSurvey = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isEditing'], true); 
    return newState;
}

let handleUpdateSurveyFailure = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isEditing'], false); 
    return newState;
}

let handleUpdateSurveySuccess = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isEditing'], false);
    newState = state.setIn(['surveysViewData', 'openEditModal'], false);
    return newState;
}

export {
    handleUpdateSurvey,
    handleUpdateSurveySuccess,
    handleUpdateSurveyFailure
}
