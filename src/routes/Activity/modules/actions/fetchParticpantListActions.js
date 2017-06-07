/**
 * Created by rui on 5/9/17.
 */
import axios from "axios";
import generateUsers from "../UserGenerator"
import { sortParticipants } from "./userMatchingActions"
import { createLocks } from "./groupLockActions"
const SERVER_URL = "http://" + window.location.host;

/* fetching, get requests */
export const FETCH_PARTICIPANT_LIST = "FETCH_PARTICIPANT_LIST";
let fetchParticipantList = (dispatch) => {
    return (activityId) => {
        dispatch({ type: FETCH_PARTICIPANT_LIST });
         let url = SERVER_URL + "/api/activities/" + activityId + "/participants/";
         axios.get(url)
         .then((response) => {
            dispatch(fetchParticipantListSuccess(response.data));
         })
         .catch((error) => {
            dispatch(fetchParticipantListFailure(error));
         });
    }
};

/* fetch success */
export const FETCH_PARTICIPANT_LIST_SUCCESS = "FETCH_PARTICIPANT_LIST_SUCCESS";
let fetchParticipantListSuccess = (payload) => {
    return { type: FETCH_PARTICIPANT_LIST_SUCCESS, payload: payload };
};

/* fetch failure */
export const FETCH_PARTICIPANT_LIST_FAILURE = "FETCH_PARTICIPANT_LIST_FAILURE";
let fetchParticipantListFailure = (error) => {
    return { type: FETCH_PARTICIPANT_LIST_FAILURE, error: error };
};

export {
    fetchParticipantList,
    fetchParticipantListSuccess,
    fetchParticipantListFailure,
}
