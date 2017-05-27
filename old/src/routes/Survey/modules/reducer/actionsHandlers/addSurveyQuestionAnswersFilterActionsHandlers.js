/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set} from 'immutable';

let addSurveyQuestionAnswersFilter= (state, payload) => {

    console.log(payload);

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )), 
                    "answersFilter"
                ],

                (answersFilter) => (
                    answersFilter.add(payload.answer)
                ) 
        )
    );
    
    return newState;
}

export {
   addSurveyQuestionAnswersFilter,
}
