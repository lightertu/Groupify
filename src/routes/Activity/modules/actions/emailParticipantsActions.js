/**
 * Created by rui on 5/9/17.
 */
import axios from "axios";
const SERVER_URL = "http://" + window.location.host;

/* fetching, get requests */
export const EMAIL_PARTICIPANTS = "EMAIL_PARTICIPANTS";
let emailParticipants = (dispatch) => {
    return (activityId) => {
        dispatch({ type: EMAIL_PARTICIPANTS });
         let url = SERVER_URL + "/api/activities/" + activityId + "/sendEmail";
         axios.post(url)
         .then((response) => {
            dispatch(emailParticipantsSuccess(response.data));
         })
         .catch((error) => {
            dispatch(emailParticipantsFailure(error));
         });
    }
};

/* fetch success */
export const EMAIL_PARTICIPANTS_SUCCESS = "EMAIL_PARTICIPANTS_SUCCESS";
let emailParticipantsSuccess = (payload) => {
    return { type: EMAIL_PARTICIPANTS_SUCCESS, payload: payload };
};

/* fetch failure */
export const EMAIL_PARTICIPANTS_FAILURE = "EMAIL_PARTICIPANTS_FAILURE";
let emailParticipantsFailure = (error) => {
    return { type: EMAIL_PARTICIPANTS_FAILURE, error: error };
};

export {
    emailParticipants,
    emailParticipantsSuccess,
    emailParticipantsFailure,
}
