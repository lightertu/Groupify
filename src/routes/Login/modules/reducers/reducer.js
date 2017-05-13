/**
 * Created by Joseph on 5/11/17.
 */
import * as Actions from "../actions"
import * as ActionsHandlers from "./actionHandlers"

const initialState = {
    data: []
};

export default function activityReducer (state = initialState, action) {
    switch(action.type) {

        /* reduce group assignment actions */
        case Actions.generateUserActions.GENERATE_USER:
            return ActionsHandlers.generateUserActionsHandlers.handleGenerateUser(state, action.payload);
        case Actions.generateUserActions.GENERATE_USER_SUCCESS:
            return ActionsHandlers.generateUserActionsHandlers.handleGenerateUserSuccess(state, action.payload);
        case Actions.generateUserActions.GENERATE_USER_FAILURE:
            return ActionsHandlers.generateUserActionsHandlers.handleGenerateUserFailure(state, action.payload);
        default:
            return state;
    }
};
