/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set} from 'immutable';

let addSurveyQuestionAnswer= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )), 
                    "answers"
                ],

                (answers) => (
                    answers.add(payload.answer)
                ) 
        )
    );
    
    return newState;
}

export {
   addSurveyQuestionAnswer,
}
