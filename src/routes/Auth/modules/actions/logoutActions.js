/**
 * Created by rui on 6/2/17.
 */

import { authenticationActions } from "../../../../store/authentication/actions"
import { browserHistory } from 'react-router'
import axios from 'axios'

export const LOGOUT = 'LOGOUT'
let logout = (dispatch) => {
    return () => {
        browserHistory.push("/");
        localstorage.removeitem('token')

        /* remove the axios token from the client side */
        delete axios.defaults.headers.common['Authorization'];
        dispatch({type: LOGOUT, payload: null})

        /* this action will be handled in the global authentication reducer, therefore we can
         * remove the token from the store */
        dispatch(authenticationActions.unauthenticationSuccess(null));
    }
}

export {
    logout
}
