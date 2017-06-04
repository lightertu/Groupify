/**
 * Created by rui on 6/2/17.
 */

import axios from 'axios'
import { authenticationActions } from '../../../../store/authentication/actions'

const SERVER_URL = 'http://localhost:3000'
export const LOGIN = 'LOGIN'

let login = (dispatch) => {
    return (email, password) => {
        let payload = {email: email, password: password}

        console.log(payload);

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
                console.log("got here");
                dispatch(loginFailure(error, payload))
            })
    }
}

/* user failure */
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
let loginFailure = (error, payload) => {
    return {type: LOGIN_FAILURE, payload: payload}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
let loginSuccess = (error, payload) => {
    return {type: LOGIN_SUCCESS, error: error, payload: payload}
}

export {
    login,
    loginSuccess,
    loginFailure
}
