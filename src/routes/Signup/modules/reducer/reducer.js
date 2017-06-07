import { Map, List } from 'immutable'
import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'


const initialState = Map({
    signingUp: false,
    signupSuccess: false,
    signupFailure: false
})

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case(Actions.signupActions.SIGNUP):
            return ActionHandlers.signupActionsHandlers.handleSignup(state, null)
        case(Actions.signupActions.SIGNUP_SUCCESS):
            return ActionHandlers.signupActionsHandlers.handleSignupSuccess(state, null)
        case(Actions.signupActions.SIGNUP_FAILURE):
            return ActionHandlers.signupActionsHandlers.handleSignupFailure(state, null)

        case(Actions.signupActions.HIDE_ERROR_MESSAGE):
            return ActionHandlers.signupActionsHandlers.handleHideErrorMessages(state, null)
        default:
            return state
    }
}
