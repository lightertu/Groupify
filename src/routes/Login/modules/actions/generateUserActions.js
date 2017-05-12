// created by Joseph 5/11/17

import axios from "axios";
const SERVER_URL = "http://localhost:3000";

export const GENERATE_USER = "GENERATE_GROUP_USER";
let generateUser = (dispatch) => {
    return (email, password) => {

    	let payload = {
    		email: email,
    		password: password
    	};

        dispatch({
            type: GENERATE_USER,
            payload: payload
        });

        let url = SERVER_URL + "/api/auth/signup";
        axios.put(url, {
        	username: email,
        	password: password
        })
            .then((response) => {
                dispatch(generateUserSuccess(response));
            })
            .catch((error) => {
                dispatch(generateUserFailure(error, payload));
            });
    }
};

/* user success */
export const GENERATE_USER_SUCCESS = "GENERATE_USER_SUCCESS";
let generateUserSuccess = () => {
    return { type: GENERATE_USER_SUCCESS };
};

/* user failure */
export const GENERATE_USER_FAILURE = "GENERATE_USER_FAILURE";
let generateUserFailure = (error) => {
    return { type: GENERATE_USER_FAILURE, error: error };
};

export {
    generateUser,
    generateUserSuccess,
    generateUserFailure
}
