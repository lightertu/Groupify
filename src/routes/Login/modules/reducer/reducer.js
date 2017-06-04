import { Map, List } from 'immutable'
import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'


const initialState = Map({
    authenticating: false,
    authenticationFailed: false
})

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case(Actions.loginActions.LOGIN):
            return ActionHandlers.loginActionsHandlers.handleLogin(state, action.playload)

        case(Actions.loginActions.LOGIN_SUCCESS):
            return ActionHandlers.loginActionsHandlers.handleLoginSuccess(state, action.playload)

        case(Actions.loginActions.LOGIN_FAILURE):
            return ActionHandlers.loginActionsHandlers.handleLoginFailure(state, action.playload)

        case(Actions.logoutActions.LOGOUT):
            return state

        case(Actions.loginActions.HIDE_ERROR_MESSAGE):
            return ActionHandlers.loginActionsHandlers.handleHideErrorMessage(state, action.payload)
        default:
            return state
    }
}
