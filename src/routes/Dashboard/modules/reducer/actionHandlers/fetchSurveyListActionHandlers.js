/**
 * Created by Matt on 5/23/17.
 */

import {Map, Set, List, OrderedSet} from 'immutable';
// add more handlers for fetching activity list action
let handleFetchingSurveyList = (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'isLoading'], surveys => {
        return true;
    });
    newState = newState.updateIn(['surveysViewData', 'failedToGet'], surveys => {
        return false;
    });   
    return newState;

}
let handleFetchSurveyListSuccess = (state, payload) => {
    let newSurveys = List([]);
    payload['surveys'].forEach((survey) => {
        let newQuestions = List([]);
        survey['questions'].forEach((question) => {
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
        newSurveys = newSurveys.push(
            Map({
                'title':survey.title, 
                'surveyId': survey._id, 
                'color':survey.color,
                'createdAt':survey.createdAt,
                'questions':newQuestions
            })
        ) 
    });

    let newState = state.updateIn(['surveysViewData', 'surveys'], surveys => {
        return newSurveys;
    });
    
    newState = newState.updateIn(['surveysViewData', 'isLoading'], surveys => {
        return false;
    });


    return newState;
}

let handleFetchSurveyListFailure = (state, payload) =>  {
    let newState = state.updateIn(['surveysViewData', 'failedToGet'], surveys => {
        return true;
    });
            
    return newState;
            
}

export {
    handleFetchingSurveyList,
    handleFetchSurveyListSuccess,
    handleFetchSurveyListFailure
}
