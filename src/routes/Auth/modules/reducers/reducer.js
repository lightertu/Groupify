import { Map, List } from 'immutable'
import * as Actions from '../actions'

const initialState = Map({
    jwtToken: localStorage.getItem('jwtToken') || null,
    authenticating: false,
})

export default (state = initialState, action) => {
    switch (action.type) {
        case(Actions.loginActions.LOGIN):
            return state

        case(Actions.loginActions.LOGIN_SUCCESS):
            return state

        case(Actions.loginActions.LOGIN_FAILURE):
            return state

        case(Actions.logoutActions.LOGOUT):
            return state
    }

    return state
}
