/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const CREATE_SURVEY_QUESTION= "CREATE_SURVEY_QUESTION";
let createSurveyQuestion= (dispatch) => {
    return (type, title, tooltip) => {

        let payload = {
            type: type,
            title: title,
            tooltip: tooltip,
        };

        dispatch({
            type: CREATE_SURVEY_QUESTION,
            payload: payload
        });

    }
};

export {
    createSurveyQuestion,
}
