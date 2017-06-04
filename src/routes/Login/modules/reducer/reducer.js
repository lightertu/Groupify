import { Map, List } from 'immutable'
import * as Actions from '../actions'


const initialState = Map({
    isLoginSuccess: false,
})

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case(Actions.loginActions.LOGIN):
            return state

        case(Actions.loginActions.LOGIN_SUCCESS):
            return state.set("isLoginSuccess", true);

        case(Actions.loginActions.LOGIN_FAILURE):
            return state

        case(Actions.logoutActions.LOGOUT):
            return state
        default:
            return state
    }
}
