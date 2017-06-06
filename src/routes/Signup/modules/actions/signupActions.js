/**
 * Created by rui on 6/2/17.
 */

import axios from 'axios'
import {routerActions } from 'react-router-redux'

const SERVER_URL = "http://" + window.location.host;
export const SIGNUP = 'SIGNUP'



let signup = (dispatch) => {
    return (email, password) => {
        let payload = {email: email, password: password}

        /* first dispatch an action so we know that user is logging in*/
        dispatch({type: SIGNUP, payload: null})

        let url = SERVER_URL + '/api/auth/signup'
        axios.post(url, payload)
            .then((response) => {
                /* this will set the the authorization token in all axios requests. */
                dispatch(signupSuccess(response))

                /* redirect to login in 3 seconds */
                setTimeout(()=>{
                    dispatch(routerActions.replace("/login"))
                }, 3000)
            })
            .catch((error) => {
                console.log(error);
                dispatch(signupFailure(error, payload))
            })
    }
}

/* user failure */
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
let signupFailure = (error) => {
    return {type: SIGNUP_FAILURE, error: error}
}

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
let signupSuccess = (payload) => {
    return {type: SIGNUP_SUCCESS, payload: payload}
}

export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE'
let hideErrorMessage = (payload) => {
    return {type: HIDE_ERROR_MESSAGE, payload: payload}
}


export {
    signup,
    signupSuccess,
    signupFailure,
    hideErrorMessage
}
