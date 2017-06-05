/**
 * Created by rui on 5/9/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

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
        console.log('-------------------------------');
        console.log({groupNumber:payload.newGroupNumber});
        dispatch({
            type: UPDATE_PARTICIPANT_GROUP_NUMBER,
            payload: payload
        });

        let url = SERVER_URL + "/api/activities/" + activityId + "/participants/" + participantId + '/groupNumber';
        axios.put(url, {groupNumber:payload.newGroupNumber})
            .then((response) => {
                dispatch(updateParticipantGroupNumberSuccess(response));
            })
            .catch((error) => {
                dispatch(updateParticipantGroupNumberFailure(error, payload));
            });
    }
};

/* update success */
export const UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS = "UPDATE_PARTICIPANT_GROUP_SUCCESS";
let updateParticipantGroupNumberSuccess = () => {
    return { type: UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS };
};

/* update failure */
// TODO: revert the change
export const UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE = "UPDATE_PARTICIPANT_GROUP_FAILURE";
let updateParticipantGroupNumberFailure = (error, payload) => {
    return { type: UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE, error: error, payload: payload };
};


export {
    updateParticipantGroupNumber,
    updateParticipantGroupNumberSuccess,
    updateParticipantGroupNumberFailure,
}
