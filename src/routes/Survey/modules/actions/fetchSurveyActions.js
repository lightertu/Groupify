/**
 * Created by Matt on 5/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://"+window.location.host;

/* fetching, get requests */
export const FETCH_SURVEY = "FETCH_SURVEY";
let fetchSurvey = (dispatch) => {
    return (activity_id) => {
        dispatch({type: FETCH_SURVEY});
        let url = SERVER_URL + '/api/activities/' + activity_id + '/participants/survey';
        axios.get(url)
            .then((response) => {
                dispatch(fetchSurveySuccess(response.data.survey));
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchSurveyFailure(error));
            });
    }
};

/* fetch success */
export const FETCH_SURVEY_SUCCESS = "FETCH_SURVEY_SUCCESS";
let fetchSurveySuccess = (payload) => {
    return {type: FETCH_SURVEY_SUCCESS, payload: payload};
};

/* fetch failure */
export const FETCH_SURVEY_FAILURE = "FETCH_SURVEY_FAILURE";
let fetchSurveyFailure = (payload) => {
    return {type: FETCH_SURVEY_FAILURE, payload: payload};
};

export {
    fetchSurvey,
    fetchSurveySuccess,
    fetchSurveyFailure,
}
