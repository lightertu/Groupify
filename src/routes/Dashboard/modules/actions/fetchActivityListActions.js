/**
 * Created by rui on 5/2/17.
 */
/**
 * Created by rui on 4/18/17.
 */
import axios from "axios";
const SERVER_URL = "http://localhost:3000";

/* fetching, get requests */
export const FETCH_ACTIVITY_LIST = "FETCH_ACTIVITY_LIST";
let fetchActivityList = (dispatch) => {
    return () => {
        dispatch( {type: FETCH_ACTIVITY_LIST} );
        let url = SERVER_URL + "/api/activities";
        axios.get(url)
            .then((response) => {
                dispatch(fetchActivityListSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchActivityListFailure(error));
            });
    }
};

/* fetch success */
export const FETCH_ACTIVITY_LIST_SUCCESS = "FETCH_ACTIVITY_LIST_SUCCESS";
let fetchActivityListSuccess = (payload) => {
    return {type: FETCH_ACTIVITY_LIST_SUCCESS, payload: payload};
};

/* fetch failure */
export const FETCH_ACTIVITY_LIST_FAILURE = "FETCH_ACTIVITY_LIST_FAILURE";
let fetchActivityListFailure = (error) => {
    return {type: FETCH_ACTIVITY_LIST_FAILURE, error: error};
};

export {
    fetchActivityList,
    fetchActivityListSuccess,
    fetchActivityListFailure,
}
