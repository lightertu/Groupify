import { Map, List } from 'immutable'
import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'


const initialState = Map({
    loggedIn: false,
})

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case(Actions.loginActions.LOGIN):
            return ActionHandlers.loginActionsHandlers.handleLogin(state, action.playload)

        case(Actions.loginActions.LOGIN_SUCCESS):
            return ActionHandlers.loginActionsHandlers.handleLoginSuccess(state, action.playload)

        case(Actions.loginActions.LOGIN_FAILURE):
            return state

        case(Actions.logoutActions.LOGOUT):
            return state
        default:
            return state
    }
}
