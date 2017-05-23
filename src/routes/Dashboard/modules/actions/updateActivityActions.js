/**
 * Created by rui on 5/19/17.
 */
/**
 * Created by rui on 5/2/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
let updateActivity = (dispatch) => {
    return (payload, activityId) => {
        dispatch({type: UPDATE_ACTIVITY, activityId: activityId, payload: payload});
        let url = SERVER_URL + "/api/activities" + activityId;
        axios.put(url, payload)
            .then((response) => {
                dispatch(updateActivitySuccess(response.data));
            })
            .catch((error) => {
                dispatch(updateActivityFailure(error));
            });
    }
};

/* fetch success */
export const UPDATE_ACTIVITY_SUCCESS = "UPDATE_ACTIVITY_SUCCESS";
let updateActivitySuccess = (payload) => {
    return {type: UPDATE_ACTIVITY_SUCCESS, payload: payload};
};

/* fetch failure */
export const UPDATE_ACTIVITY_FAILURE = "UPDATE_ACTIVITY_FAILURE";
let updateActivityFailure = (error) => {
    return {type: UPDATE_ACTIVITY_FAILURE, error: error};
};

export {
    updateActivity,
    updateActivitySuccess,
    updateActivityFailure,
}
/**
 * Created by rui on 5/19/17.
 */
