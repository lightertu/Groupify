/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const ADD_SURVEY_QUESTION_ANSWERS_FILTER= "ADD_SURVEY_QUESTION_ANSWERS_FILTER";
let addSurveyQuestionAnswersFilter= (dispatch) => {
    return (type, title, answer) => {

        let payload = {
            type: type,
            title: title,
            answer: answer,
        };

        dispatch({
            type: ADD_SURVEY_QUESTION_ANSWERS_FILTER,
            payload: payload
        });

    }
};

export {
    addSurveyQuestionAnswersFilter,
}
