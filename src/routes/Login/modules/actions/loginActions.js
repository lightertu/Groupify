/**
 * Created by rui on 6/2/17.
 */

import axios from 'axios'
import { authenticationActions } from '../../../../store/authentication/actions'
import { browserHistory } from 'react-router'
import {routerActions } from 'react-router-redux'

const SERVER_URL = 'http://localhost:3000'
export const LOGIN = 'LOGIN'



let login = (dispatch) => {
    return (email, password) => {
        let payload = {email: email, password: password}

        /* first dispatch an action so we know that user is logging in*/
        dispatch({type: LOGIN, payload: null})

        let url = SERVER_URL + '/api/auth/login'
        axios.post(url, payload)
            .then((response) => {
                /* this is the jwt token */
                const token = response.data.token

                /* store token in the local storage*/
                localStorage.setItem('jwtToken', token)

                /* this will set the the authorization token in all axios requests. */
                axios.defaults.headers.common['Authorization'] = token;

                dispatch(loginSuccess(response))

                /* dispatching this action to store the jwtToken in the global redux store */
                dispatch(authenticationActions.authenticationSuccess(token))
            })
            .catch((error) => {
                console.log(error);
                dispatch(loginFailure(error, payload))
            })
    }
}

/* user failure */
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
let loginFailure = (error) => {
    return {type: LOGIN_FAILURE, error: error}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
let loginSuccess = (payload) => {
    return {type: LOGIN_SUCCESS, payload: payload}
}

export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE'
let hideErrorMessage = (payload) => {
    return {type: HIDE_ERROR_MESSAGE, payload: payload}
}


export {
    login,
    loginSuccess,
    loginFailure,
    hideErrorMessage
}
