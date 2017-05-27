/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const SET_SURVEY_QUESTION_ANSWERS_MAXIMUM= "SET_SURVEY_QUESTION_ANSWERS_MAXIMUM";
let setSurveyQuestionAnswersMaximum= (dispatch) => {
    return (type, title, option) => {

        let payload = {
            type: type,
            title: title,
            option: option,
        };

        dispatch({
            type: SET_SURVEY_QUESTION_ANSWERS_MAXIMUM,
            payload: payload
        });

    }
};

export {
    setSurveyQuestionAnswersMaximum,
}
