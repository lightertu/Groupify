/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedSet} from 'immutable';

let deleteSurveyQuestion= (state, payload) => {

    console.log("BLAHBLAH");
    let newState = state.update('questions', (questions) => { 
        let index = questions.findIndex((question) => (
            question.get('title') === payload.title
            &&
            question.get('type') === payload.type
        ))
        return ((index != -1) ? questions.delete(index) : questions)
    });
    
    return newState;
}

export {
   deleteSurveyQuestion,
}
