/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set} from 'immutable';

let setSurveyQuestionAnswersMinimum= (state, payload) => {

    console.log(payload);

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )), 
                    "answersMinimum"
                ],

                (option) => {return payload.option}
        )
    );
    
    return newState;
}

export {
   setSurveyQuestionAnswersMinimum,
}
