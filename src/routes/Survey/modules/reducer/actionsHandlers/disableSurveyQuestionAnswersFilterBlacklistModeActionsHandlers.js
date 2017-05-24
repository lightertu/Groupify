/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set} from 'immutable';

let disableSurveyQuestionAnswersFilterBlacklistMode= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )), 
                    "answersFilterEnableBlacklistMode"
                ],

                (option) => {return false}
        )
    );
    
    return newState;
}

export {
   disableSurveyQuestionAnswersFilterBlacklistMode,
}
