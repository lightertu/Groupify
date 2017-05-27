/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const ENABLE_SURVEY_QUESTION_ANSWERS_MAXIMUM= "ENABLE_SURVEY_QUESTION_ANSWERS_MAXIMUM";
let enableSurveyQuestionAnswersMaximum= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: ENABLE_SURVEY_QUESTION_ANSWERS_MAXIMUM,
            payload: payload
        });

    }
};

export {
    enableSurveyQuestionAnswersMaximum,
}
