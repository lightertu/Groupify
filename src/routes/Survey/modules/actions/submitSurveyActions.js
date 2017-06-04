/**
 * Created by Matt on 5/23/17.
 */
import axios from "axios";
const SERVER_URL = "http://"+window.location.host;

/* submiting, get requests */
export const SUBMIT_SURVEY = "SUBMIT_SURVEY";
let submitSurvey = (dispatch) => {
    return (payload) => {
        dispatch({type: SUBMIT_SURVEY});
        let surveyResponses = [];
        payload.questions.forEach((question) => {
            surveyResponses.push(
                {
                    question:question.get('title'),
                    answer:question.get('answers')
                }   
            );       
        });
        let request = {
            name:payload.name,
            image:'NULL',
            email:payload.email,
            surveyResponses:surveyResponses
        
        }
        console.log('---------------------------------------');
           console.log(request); 
        console.log('---------------------------------------');
        let url = SERVER_URL + '/api/activities/' + payload.activityId + '/participants';
        axios.post(url, request)
            .then((response) => {
                console.log('responded:');
                console.log(response);
                dispatch(submitSurveySuccess(response.data.survey));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

/* submit success */
export const SUBMIT_SURVEY_SUCCESS = "SUBMIT_SURVEY_SUCCESS";
let submitSurveySuccess = (payload) => {
    return {type: SUBMIT_SURVEY_SUCCESS, payload: payload};
};

/* submit failure */
export const SUBMIT_SURVEY_FAILURE = "SUBMIT_SURVEY_FAILURE";
let submitSurveyFailure = (error) => {
    return {type: SUBMIT_SURVEY_FAILURE, error: error};
};

export const SET_IS_SUBMITTING = "SET_IS_SUBMITTING";
let setIsSubmitting = (dispatch) => {
    return (payload) => {
        dispatch({type: SET_IS_SUBMITTING, payload: payload});
    }
};

export const SET_FAILED_TO_SUBMIT = "SET_FAILED_TO_SUBMIT";
let setFailedToSubmit = (dispatch) => {
    return (payload) => {
        dispatch({type: SET_FAILED_TO_SUBMIT, payload: payload});
    }
};

export const SET_SUBMIT_ERROR= "SET_SUBMIT_ERROR";
let setSubmitError = (dispatch) => {
    return (payload) => {
        dispatch({type: SET_SUBMIT_ERROR, payload: payload});
    }
};
export {
    submitSurvey,
    submitSurveySuccess,
    submitSurveyFailure,

    setIsSubmitting, 
    setFailedToSubmit,
    setSubmitError
}
