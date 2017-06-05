/**
 * Created by rui on 6/2/17.
 */

import {routerActions} from 'react-router-redux'
import axios from 'axios'


let unauthenticate = (dispatch) => {
    return () => {
        console.log("unauthenticated");

        /* this action will be handled in the global authentication reducer, therefore we can
         * remove the token from the store */
        dispatch(unauthenticationSuccess())

        localStorage.removeItem('jwtToken')

        /* remove the axios token from the client side */
        delete axios.defaults.headers.common['Authorization'];

        /* back to the landing page */
        dispatch(routerActions.replace("/"));
    }
}

export const UNAUTHENTICATIONSUCCESS = 'UNAUTHENTICATIONSUCCESS'
let unauthenticationSuccess = () => {
    return {type: UNAUTHENTICATIONSUCCESS, payload: null}
}

export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'

// the payload here is the token
let authenticationSuccess = (payload) => {
    return {type: AUTHENTICATION_SUCCESS, payload: payload}
}

export {
    unauthenticate,
    authenticationSuccess,
    unauthenticationSuccess
}
