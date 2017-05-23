/**
 * Created by Matt on 05/19/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const DELETE_SURVEY_QUESTION= "DELETE_SURVEY_QUESTION";
let deleteSurveyQuestion= (dispatch) => {
    return (type, title, tooltip) => {

        let payload = {
            type: type,
            title: title,
            tooltip: tooltip,
        };

        dispatch({
            type: DELETE_SURVEY_QUESTION,
            payload: payload
        });

    }
};

export {
    deleteSurveyQuestion,
}
