/**
 * Created by Matt on 05/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const CREATE_SURVEY = "CREATE_SURVEY";
let createSurvey = (dispatch) => {
    return (payload) => {
        let url = SERVER_URL + "/api/surveys";
        axios.post(url, payload)
            .then((response) => {
                dispatch(createSurveySuccess(response.data));
            })
            .catch((error) => {
                console.log(error.response.data.error);
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
