// created by Joseph 5/11/17

import axios from "axios";
const SERVER_URL = "http://localhost:3000";

export const FETCH_USER = "FETCH_USER";
let fetchUser = (dispatch) => {
    return (email, password) => {

    	let payload = {
    		email: email,
    		password: password
    	};

        dispatch({
            type: FETCH_USER,
            payload: payload
        });

        let url = SERVER_URL + "/api/auth/login";
        axios.post(url, {
        	email: email,
        	password: password
        })
            .then((response) => {
                dispatch(fetchUserSuccess(response));
                console.log(response)
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error, payload));
                console.log(error)
            });
    }
};

/* user success */
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
let fetchUserSuccess = (response) => {
    return { type: FETCH_USER_SUCCESS, payload: response };
};

/* user failure */
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
let fetchUserFailure = (error, payload) => {
    return { type: FETCH_USER_FAILURE, error: error, payload: payload };
};

export {
    fetchUser,
    fetchUserSuccess,
    fetchUserFailure
}
