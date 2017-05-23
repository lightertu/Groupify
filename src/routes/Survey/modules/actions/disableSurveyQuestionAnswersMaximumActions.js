/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const DISABLE_SURVEY_QUESTION_ANSWERS_MAXIMUM= "DISABLE_SURVEY_QUESTION_ANSWERS_MAXIMUM";
let disableSurveyQuestionAnswersMaximum= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: DISABLE_SURVEY_QUESTION_ANSWERS_MAXIMUM,
            payload: payload
        });

    }
};

export {
    disableSurveyQuestionAnswersMaximum,
}
