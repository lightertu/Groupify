/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const SET_SURVEY_QUESTION_ANSWERS_MINIMUM= "SET_SURVEY_QUESTION_ANSWERS_MINIMUM";
let setSurveyQuestionAnswersMinimum= (dispatch) => {
    return (type, title, option) => {

        let payload = {
            type: type,
            title: title,
            option: option,
        };

        dispatch({
            type: SET_SURVEY_QUESTION_ANSWERS_MINIMUM,
            payload: payload
        });

    }
};

export {
    setSurveyQuestionAnswersMinimum,
}
