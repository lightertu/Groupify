/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const ENABLE_SURVEY_QUESTION_ANSWERS_FILTER= "ENABLE_SURVEY_QUESTION_ANSWERS_FILTER";
let enableSurveyQuestionAnswersFilter= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: ENABLE_SURVEY_QUESTION_ANSWERS_FILTER,
            payload: payload
        });

    }
};

export {
    enableSurveyQuestionAnswersFilter,
}
