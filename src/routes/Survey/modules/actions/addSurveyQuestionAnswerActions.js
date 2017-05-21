/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const ADD_SURVEY_QUESTION_ANSWER= "ADD_SURVEY_QUESTION_ANSWER";
let addSurveyQuestionAnswer= (dispatch) => {
    return (type, title, answer) => {

        let payload = {
            type: type,
            title: title,
            answer: answer,
        };

        dispatch({
            type: ADD_SURVEY_QUESTION_ANSWER,
            payload: payload
        });

    }
};

export {
    addSurveyQuestionAnswer,
}
