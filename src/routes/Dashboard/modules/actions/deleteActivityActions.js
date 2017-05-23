/**
 * Created by rui on 5/23/17.
 */
/**
 * Created by rui on 5/19/17.
 */
/**
 * Created by rui on 5/2/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
let deleteActivity = (dispatch) => {
    return (activityId) => {
        dispatch({type: DELETE_ACTIVITY, activityId: activityId});
        let url = SERVER_URL + "/api/activities/" + activityId;

        axios.delete(url)
            .then((response) => {
                dispatch(deleteActivitySuccess(response.data, activityId));
            })
            .catch((error) => {
                dispatch(deleteActivityFailure(error));
            });
    }
};

/* fetch success */
export const DELETE_ACTIVITY_SUCCESS = "DELETE_ACTIVITY_SUCCESS";
let deleteActivitySuccess = (payload, activityId) => {
    return {type: DELETE_ACTIVITY_SUCCESS, payload: activityId};
};

/* fetch failure */
export const DELETE_ACTIVITY_FAILURE = "DELETE_ACTIVITY_FAILURE";
let deleteActivityFailure = (error, activityId) => {
    return {type: DELETE_ACTIVITY_FAILURE, error: error};
};

export {
    deleteActivity,
    deleteActivitySuccess,
    deleteActivityFailure,
}
/**
 * Created by rui on 5/19/17.
 */
