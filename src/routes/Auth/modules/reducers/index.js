import * as constants from '../../constants'

const initialState = {
    isAuthenticated: false,
    jwtToken: ""
}

export default function userUpdate (state = initialState, {type, payload}) {
    if (type === constants.USER_LOGGED_IN) {
        return payload
    }
    else if (type === constants.USER_LOGGED_OUT) {
        return {}
    }
    return state
}