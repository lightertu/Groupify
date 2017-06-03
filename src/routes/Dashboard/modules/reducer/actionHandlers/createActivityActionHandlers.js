/**
 * Created by rui on 5/23/17.
 * Updated by Matt on 5/29/17
 */

import {Map, List, Set, OrderedSet} from 'immutable';

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
    newState = newState.setIn(['activitiesViewData', 'openCreateModal'], false);
    return newState;
}

export {
    handleCreateActivity,
    handleCreateActivitySuccess,
    handleCreateActivityFailure
}


/** For Survey Creation from Activity View  **/
let handleCreateSurveyFromActivity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isCreatingSurvey'], true);
    return newState;
}

let handleCreateSurveyFromActivityFailure = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isCreatingSurvey'], false);
    return newState;
}

let handleCreateSurveyFromActivitySuccess = (state, payload) => {
    console.log(payload);
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
                'questions':newQuestions
            })
        ) 
    });

    let newState = state.setIn(['surveysViewData', 'surveys'], newSurveys);


    let index = newState.get('surveysViewData').get('surveys')
                .findIndex((survey) => (survey.get('surveyId') === payload['surveyId'])) 

    newState = newState.updateIn(['surveysViewData', 'surveyHolder'], surveyHolder=> {
        return (
            (index == -1) ?
               newState.get('surveysViewData').get('surveyTemplate')
            :
               newState.get('surveysViewData').get('surveys').get(index)
        )
    });
    
    newState = newState.updateIn(['activitiesViewData', 'creatingSurvey'], creatingSurvey=> {
        return (
            (index == -1) ?
               true 
            :
               false
        )
    });

    newState = newState.setIn(['activitiesViewData', 'activityHolder', 'surveyId'], 
        newState.get('surveysViewData').get('surveyHolder').get('surveyId')         
    );

    newState = newState.setIn(['activitiesViewData', 'isCreatingSurvey'], false);

    return newState;
}

export {
    handleCreateSurveyFromActivity,
    handleCreateSurveyFromActivitySuccess,
    handleCreateSurveyFromActivityFailure
}
