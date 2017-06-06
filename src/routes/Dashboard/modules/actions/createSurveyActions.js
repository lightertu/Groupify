/**
 * Created by Matt on 05/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://"+window.location.host;
import {FETCH_SURVEY_LIST, 
        fetchSurveyListFailure, 
        fetchSurveyListSuccess} from './fetchSurveyListActions';

/* fetching, get requests */
export const CREATE_SURVEY = "CREATE_SURVEY";
let createSurvey = (dispatch) => {
    return (payload) => {
        let url = SERVER_URL + "/api/surveys";
        axios.post(url, payload)
            .then((response) => {
                dispatch({type: FETCH_SURVEY_LIST});
                axios.get(url)
                    .then((fetchResponse) => {
                        dispatch(fetchSurveyListSuccess(fetchResponse.data));
                        dispatch(createSurveySuccess(response.data));
                    })
                    .catch((error) => {
                        dispatch(fetchSurveyListFailure(error));
                        dispatch(createSurveyFailure(error));
                        console.log(error);
                    });

            })
            .catch((error) => {
                console.log(error);
                dispatch(createSurveyFailure(error));
            });
    }
};

/* fetch success */
export const CREATE_SURVEY_SUCCESS = "CREATE_SURVEY_SUCCESS";
let createSurveySuccess = (payload) => {
    return {type: CREATE_SURVEY_SUCCESS, payload: payload};
};

/* fetch failure */
export const CREATE_SURVEY_FAILURE = "CREATE_SURVEY_FAILURE";
let createSurveyFailure = (error) => {
    return {type: CREATE_SURVEY_FAILURE, error: error};
};

export {
    createSurvey,
    createSurveySuccess,
    createSurveyFailure,
}
