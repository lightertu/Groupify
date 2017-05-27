/**
 * Created by Matt on 05/22/17.
 */

import {Map, List, Set, OrderedMap} from 'immutable';

export const DISABLE_SURVEY_QUESTION_ANSWERS_FILTER_BLACKLIST_MODE= "DISABLE_SURVEY_QUESTION_ANSWERS_FILTER_BLACKLIST_MODE";
let disableSurveyQuestionAnswersFilterBlacklistMode= (dispatch) => {
    return (type, title) => {

        let payload = {
            type: type,
            title: title,
        };

        dispatch({
            type: DISABLE_SURVEY_QUESTION_ANSWERS_FILTER_BLACKLIST_MODE,
            payload: payload
        });

    }
};

export {
    disableSurveyQuestionAnswersFilterBlacklistMode,
}
