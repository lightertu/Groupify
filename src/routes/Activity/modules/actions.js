/**
 * Created by rui on 4/18/17.
 */
import axios from "axios";
import generateUsers from "../modules/UserGenerator"
const SERVER_URL = "http://localhost:3000";
const numOfPeople = 50,
      groupCapacity = 6,
      totalCapacity = 60;

/* fetching, get requests */
export const FETCH_PARTICIPANT_LIST = "FETCH_PARTICIPANT_LIST";
let fetchParticipantList = (dispatch) => {
    return (activityId) => {
        dispatch({ type: FETCH_PARTICIPANT_LIST });

        dispatch(fetchParticipantListSuccess(
            {
                activityId: activityId,
                participants: generateUsers(groupCapacity, numOfPeople),
                groupCapacity: groupCapacity,
                totalCapacity: numOfPeople
            }
        ));

        /*
        let url = SERVER_URL + "/api/activities/" + activityId + "/participants/";
        axios.get(url)
        .then((response) => {
            console.log(JSON.stringify(response, null, 2));
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
    return (activityId, participantId, oldGroupNumber, newGroupNumber) => {

        let payload = {
            activityId: activityId,
            participantId: participantId,
            oldGroupNumber: oldGroupNumber,
            newGroupNumber: newGroupNumber
        };

        dispatch({
            type: UPDATE_PARTICIPANT_GROUP_NUMBER,
            payload: payload
        });

        /*
        let url = SERVER_URL + "/api/activities/" + activityId + "/participants/" + participantId;
        axios.put(url, {
            oldGroupsNumber: oldGroupNumber,
            newGroupNumber: newGroupNumber
        })
        .then((response) => {
            dispatch(updateParticipantGroupNumberSuccess(response));
        })
        .catch((error) => {
            dispatch(updateParticipantGroupNumberFailure(error, payload));
        });
        */
    }
};

/* update success */
export const UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS = "UPDATE_PARTICIPANT_GROUP_SUCCESS";
let updateParticipantGroupNumberSuccess = () => {
    return { type: UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS };
};

/* update failure */
export const UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE = "UPDATE_PARTICIPANT_GROUP_FAILURE";
let updateParticipantGroupNumberFailure = (error, payload) => {
    return { type: UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE, error: error, payload: payload };
};



/* put request */
export const GENERATE_GROUP_ASSIGNMENT = "GENERATE_GROUP_ASSIGNMENT";
let generateGroupAssignment = (dispatch) => {
    return (activityKey, algorithmKey) => {
       dispatch({
            type: GENERATE_GROUP_ASSIGNMENT
       });

        let url = SERVER_URL + "/api/activities/" + activityKey + "/" + algorithmKey;
        axios.put(url)
        .then((response) => {
            dispatch(generateGroupAssignmentFailure());
        })
        .catch((error) => {
            dispatch(generateGroupAssignmentFailure(error));
        });

        fetchParticipantList(dispatch)();
    }
};

/* update success */
export const GENERATE_GROUP_ASSIGNMENT_SUCCESS = "GENERATE_GROUP_ASSIGNMENT_SUCCESS";
let generateGroupAssignmentSuccess = () => {
    return { type: GENERATE_GROUP_ASSIGNMENT_SUCCESS };
};

/* update failure */
export const GENERATE_GROUP_ASSIGNMENT_FAILURE = "GENERATE_GROUP_ASSIGNMENT_FAILURE";
let generateGroupAssignmentFailure = (error) => {
    return { type: GENERATE_GROUP_ASSIGNMENT_FAILURE, error: error };
};

export {
    fetchParticipantList,
    fetchParticipantListSuccess,
    fetchParticipantListFailure,

    updateParticipantGroupNumber,
    updateParticipantGroupNumberSuccess,
    updateParticipantGroupNumberFailure,

    generateGroupAssignment,
    generateGroupAssignmentSuccess,
    generateGroupAssignmentFailure
}
