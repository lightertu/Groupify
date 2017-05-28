/**
 * Created by Matt on 5/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const UPDATE_SURVEY = "UPDATE_SURVEY";
let updateSurvey = (dispatch) => {
    return (payload) => {
        dispatch({type: UPDATE_SURVEY, payload: payload});
        let url = SERVER_URL + "/api/surveys/"+ payload.get('surveyId');
        axios.put(url, payload)
            .then((response) => {
                dispatch(updateSurveySuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(updateSurveyFailure(error));
            });
    }
};

/* fetch success */
export const UPDATE_SURVEY_SUCCESS = "UPDATE_SURVEY_SUCCESS";
let updateSurveySuccess = (payload) => {
    return {type: UPDATE_SURVEY_SUCCESS, payload: payload};
};

/* fetch failure */
export const UPDATE_SURVEY_FAILURE = "UPDATE_SURVEY_FAILURE";
let updateSurveyFailure = (error) => {
    return {type: UPDATE_SURVEY_FAILURE, error: error};
};

export {
    updateSurvey,
    updateSurveySuccess,
    updateSurveyFailure,
}
