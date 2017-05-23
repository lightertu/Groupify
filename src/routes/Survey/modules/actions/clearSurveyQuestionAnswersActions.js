/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const CLEAR_SURVEY_QUESTION_ANSWERS= "CLEAR_SURVEY_QUESTION_ANSWERS";
let clearSurveyQuestionAnswers= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: CLEAR_SURVEY_QUESTION_ANSWERS,
            payload: payload
        });

    }
};

export {
    clearSurveyQuestionAnswers,
}
