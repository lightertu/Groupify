/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const CLEAR_SURVEY_QUESTION_ANSWERS_FILTERS= "CLEAR_SURVEY_QUESTION_ANSWERS_FILTERS";
let clearSurveyQuestionAnswersFilters= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: CLEAR_SURVEY_QUESTION_ANSWERS_FILTERS,
            payload: payload
        });

    }
};

export {
    clearSurveyQuestionAnswersFilters,
}
