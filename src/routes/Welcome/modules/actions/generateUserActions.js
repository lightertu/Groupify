// created by Joseph 5/11/17

import axios from "axios";
import { SET_ERROR_MESSAGE, SET_ERROR_TRUE } from "./errorActions"
const SERVER_URL = "http://localhost:3000";

export const GENERATE_USER = "GENERATE_USER";
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
        axios.post(url, {
        	email: email,
        	password: password
        })
            .then((response) => {
                dispatch(generateUserSuccess(response));
                let data = response.data
                console.log(data.message)

                dispatch({
                    type: SET_ERROR_TRUE,
                });

                dispatch({
                    type: SET_ERROR_MESSAGE,
                    message: data.message
                });

            })
            .catch((error) => {
                dispatch(generateUserFailure(error, payload));
                console.log(error)
            });
    }
};

/* user success */
export const GENERATE_USER_SUCCESS = "GENERATE_USER_SUCCESS";
let generateUserSuccess = (response) => {
    return { type: GENERATE_USER_SUCCESS, payload: response };
};

/* user failure */
export const GENERATE_USER_FAILURE = "GENERATE_USER_FAILURE";
let generateUserFailure = (error, payload) => {
    return { type: GENERATE_USER_FAILURE, error: error, payload: payload };
};

export {
    generateUser,
    generateUserSuccess,
    generateUserFailure
}
