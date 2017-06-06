/**
 * Created by Matt on 5/23/17.
 */

import {Map, Set, List, OrderedSet} from 'immutable';
// add more handlers for fetching activity list action
let handleFetchingSurvey = (state, payload) => {
    let newState = state.set('isLoading', true);
    newState = newState.set('failedToGet',  false);   
    return newState;
}

let handleFetchSurveySuccess = (state, payload) => {
    let newQuestions = List([]);
    payload['questions'].forEach((question) => {
        newQuestions = newQuestions.push(
            Map({
                'title':question['title'],
                'type':question['type'],
                'tooltip':question['tooltip'],
                'answers':Set(question['answers']),
                'answersEnableFilter':question['answersEnableFilter'],
                'answersFilter':OrderedSet(question['answersFilter']),
                'answersEnableMaximum':question['answersEnableMaximum'],
                'answersMaximum':question['answersMaximum'],
                'answersEnableMinimum':question['answersEnableMinimum'],
                'answersMinimum':question['answersMinimum'],
                'answersFilterEnableBlacklistMode':question['answersFilterEnableBlacklistMode'],
            })
        );
    });

    let newState = state.set('questions', newQuestions);
    
    newState = newState.set('title',  payload['title']);

    newState = newState.set('isLoading', false);
    newState = newState.set('failedToGet',  false);   

    return newState;
}

let handleFetchSurveyFailure = (state, payload) =>  {
    let newState = state.set('isLoading', false);
    newState = newState.set('failedToGet',  true);   
    return ((payload.response && (payload.response.status === 404)) ? newState : state);
    
            
}

export {
    handleFetchingSurvey,
    handleFetchSurveySuccess,
    handleFetchSurveyFailure,
}
