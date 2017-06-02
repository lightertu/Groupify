/**
 * Created by rui on 5/19/17.
 */
/**
 * Created by rui on 5/2/17.
 */
/**
 * Created by rui on 4/18/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
let createActivity = (dispatch) => {
    return (payload) => {
        dispatch({type: CREATE_ACTIVITY, payload: payload});
        let url = SERVER_URL + "/api/activities";
        axios.post(url, payload)
            .then((response) => {
                dispatch(createActivitySuccess(response.data));
            })
            .catch((error) => {
                console.log(error.response.data.error);
                dispatch(createActivityFailure(error));
            });
    }
};

/* fetch success */
export const CREATE_ACTIVITY_SUCCESS = "CREATE_ACTIVITY_SUCCESS";
let createActivitySuccess = (payload) => {
    return {type: CREATE_ACTIVITY_SUCCESS, payload: payload};
};

/* fetch failure */
export const CREATE_ACTIVITY_FAILURE = "CREATE_ACTIVITY_FAILURE";
let createActivityFailure = (error) => {
    return {type: CREATE_ACTIVITY_FAILURE, error: error};
};

export {
    createActivity,
    createActivitySuccess,
    createActivityFailure,
}
