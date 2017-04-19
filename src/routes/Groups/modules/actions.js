/**
 * Created by rui on 4/18/17.
 */
import axios from "axios";
import generateUsers from "../modules/UserGenerator"
const SERVER_URL = "localhost:3000";

/* fetching, get requests */
export const FETCH_PARTICIPANT_LIST = "FETCH_PARTICIPANT_LIST";
let fetchParticipantList = (dispatch) => {
    return () => {
        dispatch({ type: FETCH_PARTICIPANT_LIST });
        dispatch(fetchParticipantListSuccess(
            {
                participants: generateUsers(6, 60),
                groupCapacity: 10,
                totalCapacity: 60
            }
        ));
        /*
        axios.get(SERVER_URL + "/api/participants")
            .then((response) => {
                dispatch(fetchParticipantListSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchParticipantListFailure(error));
            });
        */
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


/* update put requests */
export const UPDATE_PARTICIPANT_GROUP_NUMBER = "UPDATE_PARTICIPANT_GROUP";
let updateParticipantGroupNumber = (dispatch) => {
    return (participantId, newGroupNumber) => {
        dispatch({ type: UPDATE_PARTICIPANT_GROUP_NUMBER });
        axios.put(SERVER_URL + "/api/participants/" + participantId, { newGroupNumber: newGroupNumber})
            .then((response) => {
                dispatch(updateParticipantGroupNumberSuccess());
            })
            .catch((error) => {
                dispatch(updateParticipantGroupNumberFailure(error));
            });
    }
};

/* update success */
export const UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS = "UPDATE_PARTICIPANT_GROUP_SUCCESS";
let updateParticipantGroupNumberSuccess = () => {
    return { type: UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS };
};

/* update failure */
export const UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE = "UPDATE_PARTICIPANT_GROUP_FAILURE";
let updateParticipantGroupNumberFailure = (error) => {
    return { type: UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE, error: error };
};


export {
    fetchParticipantList,
    fetchParticipantListSuccess,
    fetchParticipantListFailure,

    updateParticipantGroupNumber,
    updateParticipantGroupNumberSuccess,
    updateParticipantGroupNumberFailure
}
