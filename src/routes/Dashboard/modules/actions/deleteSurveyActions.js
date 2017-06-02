/**
 * Created by rui on 5/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";
import {FETCH_SURVEY_LIST, 
        fetchSurveyListFailure, 
        fetchSurveyListSuccess} from './fetchSurveyListActions';

/* fetching, get requests */
export const DELETE_SURVEY = "DELETE_SURVEY";
let deleteSurvey = (dispatch) => {
    return (surveyId) => {
        dispatch({type: DELETE_SURVEY, surveyId: surveyId});
        let url = SERVER_URL + "/api/surveys/" + surveyId;

        axios.delete(url)
            .then((response) => {
                dispatch(deleteSurveySuccess(response.data, surveyId));
                dispatch({type: FETCH_SURVEY_LIST});
                let fetchUrl = SERVER_URL + "/api/surveys";
                axios.get(fetchUrl)
                    .then((fetchResponse) => {
                        dispatch(fetchSurveyListSuccess(fetchResponse.data));
                    })
                    .catch((error) => {
                        dispatch(fetchSurveyListFailure(error));
                        dispatch(deleteSurveyFailure(error));
                        console.log(error);
                    });
            })
            .catch((error) => {
                dispatch(deleteSurveyFailure(error));
            });
    }
};

/* fetch success */
export const DELETE_SURVEY_SUCCESS = "DELETE_SURVEY_SUCCESS";
let deleteSurveySuccess = (payload, surveyId) => {
    return {type: DELETE_SURVEY_SUCCESS, payload: surveyId};
};

/* fetch failure */
export const DELETE_SURVEY_FAILURE = "DELETE_SURVEY_FAILURE";
let deleteSurveyFailure = (error, surveyId) => {
    return {type: DELETE_SURVEY_FAILURE, error: error};
};

export {
    deleteSurvey,
    deleteSurveySuccess,
    deleteSurveyFailure,
}
