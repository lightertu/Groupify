/**
 * Created by rui on 6/2/17.
 */

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
    authenticationSuccess,
    unauthenticationSuccess
}
