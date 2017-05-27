/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const DISABLE_SURVEY_QUESTION_ANSWERS_FILTER= "DISABLE_SURVEY_QUESTION_ANSWERS_FILTER";
let disableSurveyQuestionAnswersFilter= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: DISABLE_SURVEY_QUESTION_ANSWERS_FILTER,
            payload: payload
        });

    }
};

export {
    disableSurveyQuestionAnswersFilter,
}
