/**
 * Created by rui on 5/9/17.
 */
import axios from "axios";
const SERVER_URL = "http://" + window.location.host;
export const GENERATE_GROUP_ASSIGNMENT = "GENERATE_GROUP_ASSIGNMENT";
let generateGroupAssignment = (dispatch) => {
    return (activityId, algorithmId) => {
        dispatch({
            type: GENERATE_GROUP_ASSIGNMENT
        });

        let url = SERVER_URL + "/api/activities/" + activityId + "/participants/regroup/" + algorithmId;
        axios.get(url)
            .then((response) => {

                dispatch({ type: 'FETCH_PARTICIPANT_LIST' });
                let fetchUrl = SERVER_URL + "/api/activities/" + activityId + "/participants/";
                axios.get(fetchUrl)
                    .then((fetchResponse) => {
                        dispatch(generateGroupAssignmentSuccess(fetchResponse.data));
                    })
                    .catch((error) => {
                        dispatch(generateGroupAssignmentFailure(error));
                    });
            })
            .catch((error) => {
                dispatch(generateGroupAssignmentFailure(error));
            });
    }
};

/* update success */
export const GENERATE_GROUP_ASSIGNMENT_SUCCESS = "GENERATE_GROUP_ASSIGNMENT_SUCCESS";
let generateGroupAssignmentSuccess = (payload) => {
    return { type: GENERATE_GROUP_ASSIGNMENT_SUCCESS, payload:payload };
};

/* update failure */
export const GENERATE_GROUP_ASSIGNMENT_FAILURE = "GENERATE_GROUP_ASSIGNMENT_FAILURE";
let generateGroupAssignmentFailure = (error) => {
    return { type: GENERATE_GROUP_ASSIGNMENT_FAILURE, error: error };
};

export {
    generateGroupAssignment,
    generateGroupAssignmentSuccess,
    generateGroupAssignmentFailure
}
