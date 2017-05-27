/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const REMOVE_SURVEY_QUESTION_ANSWERS_FILTER= "REMOVE_SURVEY_QUESTION_ANSWERS_FILTER";
let removeSurveyQuestionAnswersFilter= (dispatch) => {
    return (type, title, answer) => {

        let payload = {
            type: type,
            title: title,
            answer: answer,
        };

        dispatch({
            type: REMOVE_SURVEY_QUESTION_ANSWERS_FILTER,
            payload: payload
        });

    }
};

export {
    removeSurveyQuestionAnswersFilter,
}
