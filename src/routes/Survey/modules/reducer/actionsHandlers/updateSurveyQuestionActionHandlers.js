/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set} from 'immutable';

let setName = (state, payload) => {

    let newState = state.set('name', payload);
    
    return newState;
}

let setEmail = (state, payload) => {

    let newState = state.set('email', payload);
    
    return newState;
}

let addAnswer = (state, payload) => {

    let newState = state.updateIn(['questions', payload.index, "answers"], 
            (answers) => (answers.add(payload.answer)) 
    );
    
    return newState;
}

let clearAnswers = (state, payload) => {

    let newState = state.updateIn(['questions', payload.index, "answers"], 
            (answers) => (answers.clear()) 
    );
    
    return newState;
}

let setAnswer = (state, payload) => {
    let newState = state.setIn(['questions', payload.index, "answers"], payload.answer);
    return newState;
}

let removeAnswer = (state, payload) => {

    let newState = state.updateIn(['questions', payload.index, "answers"], 
            (answers) => (answers.remove(payload.answer)) 
    );
    
    return newState;
}

export {
   setName,
   setEmail,

   addAnswer,
   clearAnswers,
   setAnswer,
   removeAnswer,

}
