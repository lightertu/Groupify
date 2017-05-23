/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedSet} from 'immutable';

let createSurveyQuestion= (state, payload) => {

    console.log("BLAHBLAH");
    let newState = state.update('questions', (questions) => (
        
        (questions.findIndex((question) => (
            question.get('title') === payload.title
            &&
            question.get('type') === payload.type
        )) == -1) ?
        
        questions.push(Map({
            'type':payload.type,
            'title':payload.title,
            'tooltip':payload.tooltip,

            'answers':Set([]),

            'answersEnableMaximum':false, 'answersMaximum':0,
            'answersEnableMinimum':false, 'answersMinimum':0,
            'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 'answersFilter':OrderedSet([]),
        }))

        :

        questions
        
        ));
    
    return newState;
}

export {
   createSurveyQuestion,
}
