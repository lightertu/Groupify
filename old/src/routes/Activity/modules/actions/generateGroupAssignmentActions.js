/**
 * Created by rui on 5/9/17.
 */
import axios from "axios";

export const GENERATE_GROUP_ASSIGNMENT = "GENERATE_GROUP_ASSIGNMENT";
let generateGroupAssignment = (dispatch) => {
    return (activityId, algorithmId) => {
        dispatch({
            type: GENERATE_GROUP_ASSIGNMENT
        });

        let url = SERVER_URL + "/api/activities/" + activityId + "/" + "algorithm/" + algorithmId;
        axios.put(url)
            .then((response) => {
                dispatch(generateGroupAssignmentFailure());
            })
            .catch((error) => {
                dispatch(generateGroupAssignmentFailure(error));
            });
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
    generateGroupAssignment,
    generateGroupAssignmentSuccess,
    generateGroupAssignmentFailure
}
