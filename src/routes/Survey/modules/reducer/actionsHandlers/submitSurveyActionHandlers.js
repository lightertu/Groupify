/**
 * Created by Matt on 5/23/17.
 */

import {Map, Set, List, OrderedSet} from 'immutable';
// add more handlers for submiting activity list action
let handleSubmitingSurvey = (state, payload) => {
    let newState = state.set('isLoading', true);
    newState = newState.set('failedToGet',  false);   
    return newState;
}

let handleSubmitSurveySuccess = (state, payload) => {
    let newState = state.set('isLoading', false);
    newState = newState.set('failedToGet',  false);   
    newState = newState.set('failedToSubmit',  false);   
    newState = newState.set('submitError',  '');   
    newState = newState.set('submitted',  true);   

    return newState;
}

let handleSubmitSurveyFailure = (state, payload) =>  {
    let newState = state.set('isLoading', false);
    newState = newState.set('failedToGet',  false);   
    newState = newState.set('failedToSubmit',  true);   
    newState = newState.set('submitError',  'SERVER ERROR: Please try again later');   
    newState = newState.set('submitted',  false);   
    return newState;
            
}

let handleSetFailedToSubmit = (state, payload) =>  {
    let newState = state.set('failedToSubmit', payload);   
    return newState;
            
}

let handleSetSubmitError = (state, payload) =>  {
    let newState = state.set('submitError',  payload);   
    return newState;
            
}

let handleSetIsSubmitting = (state, payload) =>  {
    let newState = state.set('isSubmitting',  payload);   
    return newState;
            
}

export {
    handleSubmitingSurvey,
    handleSubmitSurveySuccess,
    handleSubmitSurveyFailure,

    handleSetFailedToSubmit, 
    handleSetSubmitError,
    handleSetIsSubmitting,

}
