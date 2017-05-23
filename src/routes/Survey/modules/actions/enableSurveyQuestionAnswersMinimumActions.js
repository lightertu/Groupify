/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const ENABLE_SURVEY_QUESTION_ANSWERS_MINIMUM= "ENABLE_SURVEY_QUESTION_ANSWERS_MINIMUM";
let enableSurveyQuestionAnswersMinimum= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: ENABLE_SURVEY_QUESTION_ANSWERS_MINIMUM,
            payload: payload
        });

    }
};

export {
    enableSurveyQuestionAnswersMinimum,
}
