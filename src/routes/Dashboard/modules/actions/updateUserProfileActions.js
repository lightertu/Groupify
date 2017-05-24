/**
 * Created by rui on 5/19/17.
 */
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
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
let updateUserProfile = (dispatch) => {
    return (payload) => {
        dispatch({type: UPDATE_USER_PROFILE, payload: payload});
        let url = SERVER_URL + "/api/user/profile";
        axios.put(url, payload)
            .then((response) => {
                dispatch(updateUserProfileSuccess(response.data));
            })
            .catch((error) => {
                dispatch(updateUserProfileFailure(error));
            });
    }
};

/* fetch success */
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
let updateUserProfileSuccess = (payload) => {
    return {type: UPDATE_USER_PROFILE_SUCCESS, payload: payload};
};

/* fetch failure */
export const UPDATE_USER_PROFILE_FAILURE = "UPDATE_USER_PROFILE_FAILURE";
let updateUserProfileFailure = (error) => {
    return {type: UPDATE_USER_PROFILE_FAILURE, error: error};
};

export {
    updateUserProfile,
    updateUserProfileSuccess,
    updateUserProfileFailure,
}
/**
 * Created by rui on 5/19/17.
 */
