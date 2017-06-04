/**
 * Created by rui on 5/19/17.
 */
/**
 * Created by rui on 5/2/17.
 */
/**
 * Created by rui on 4/18/17.
 */
import axios from "axios";
const SERVER_URL = "http://"+window.location.host;
import {FETCH_ACTIVITY_LIST, 
        fetchActivityListFailure, 
        fetchActivityListSuccess} from './fetchActivityListActions';

/* fetching, get requests */
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
let createActivity = (dispatch) => {
    return (payload) => {
        dispatch({type: CREATE_ACTIVITY, payload: payload});
        let url = SERVER_URL + "/api/activities";
        axios.post(url, payload)
            .then((response) => {
                dispatch({type: FETCH_ACTIVITY_LIST});
                axios.get(url)
                    .then((fetchResponse) => {
                        dispatch(createActivitySuccess(response.data));
                        dispatch(fetchActivityListSuccess(fetchResponse.data));
                    })
                    .catch((error) => {
                        dispatch(createActivityFailure(error));
                        dispatch(fetchActivityListFailure(error));
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error.response.data.error);
                dispatch(createActivityFailure(error));
            });
    }
};

/* fetch success */
export const CREATE_ACTIVITY_SUCCESS = "CREATE_ACTIVITY_SUCCESS";
let createActivitySuccess = (payload) => {
    return {type: CREATE_ACTIVITY_SUCCESS, payload: payload};
};

/* fetch failure */
export const CREATE_ACTIVITY_FAILURE = "CREATE_ACTIVITY_FAILURE";
let createActivityFailure = (error) => {
    return {type: CREATE_ACTIVITY_FAILURE, error: error};
};



export {
    createActivity,
    createActivitySuccess,
    createActivityFailure,
}


/** For Survey Creation from Activity View  **/

/* fetching, get requests */
export const CREATE_SURVEY_FROM_ACTIVITY = "CREATE_SURVEY_FROM_ACTIVITY";
let createSurveyFromActivity = (dispatch) => {
    return (payload) => {
        let url = SERVER_URL + "/api/surveys";
        axios.post(url, payload)
            .then((response) => {
                let newSurveyId = response.data.survey._id;
                axios.get(url)
                            .then((response) => {
                                dispatch(createSurveyFromActivitySuccess(newSurveyId, response.data.surveys));
                            })
                            .catch((error) => {
                                console.log(error);
                                dispatch(createSurveyFromActivityFailure(error));
                            })
            })
            .catch((error) => {
                console.log(error);
                dispatch(createSurveyFromActivityFailure(error));
            });
    }
};

/* fetch success */
export const CREATE_SURVEY_FROM_ACTIVITY_SUCCESS = "CREATE_SURVEY_FROM_ACTIVITY_SUCCESS";
let createSurveyFromActivitySuccess = (surveyId, surveys) => {
    return {type: CREATE_SURVEY_FROM_ACTIVITY_SUCCESS, payload: {surveyId:surveyId, surveys:surveys}};
};

/* fetch failure */
export const CREATE_SURVEY_FROM_ACTIVITY_FAILURE = "CREATE_SURVEY_FROM_ACTIVITY_FAILURE";
let createSurveyFromActivityFailure = (error) => {
    return {type: CREATE_SURVEY_FROM_ACTIVITY_FAILURE, error: error};
};

export {
    createSurveyFromActivity,
    createSurveyFromActivitySuccess,
    createSurveyFromActivityFailure,
}
