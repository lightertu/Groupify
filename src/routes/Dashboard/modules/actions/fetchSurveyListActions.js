/**
 * Created by Matt on 5/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const FETCH_SURVEY_LIST = "FETCH_SURVEY_LIST";
let fetchSurveyList = (dispatch) => {
    return () => {
        dispatch({type: FETCH_SURVEY_LIST});
        let url = SERVER_URL + "/api/surveys";
        axios.get(url)
            .then((response) => {
                console.log(response.data);

                dispatch(fetchSurveyListSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchSurveyListFailure(error));
            });
    }
};

/* fetch success */
export const FETCH_SURVEY_LIST_SUCCESS = "FETCH_SURVEY_LIST_SUCCESS";
let fetchSurveyListSuccess = (payload) => {
    return {type: FETCH_SURVEY_LIST_SUCCESS, payload: payload};
};

/* fetch failure */
export const FETCH_SURVEY_LIST_FAILURE = "FETCH_SURVEY_LIST_FAILURE";
let fetchSurveyListFailure = (error) => {
    return {type: FETCH_SURVEY_LIST_FAILURE, error: error};
};

export {
    fetchSurveyList,
    fetchSurveyListSuccess,
    fetchSurveyListFailure,
}
