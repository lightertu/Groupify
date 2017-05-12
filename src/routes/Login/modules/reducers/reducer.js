/**
 * Created by Joseph on 5/11/17.
 */
import * as Actions from "../actions"
import * as ActionsHandlers from "./actionsHandlers"

const initialState = {
    token: null
};

export default function activityReducer (state = initialState, action) {
    switch(action.type) {

        /* reduce group assignment actions */
        case Actions.generateUserActions.GENERATE_GROUP_ASSIGNMENT:
            return ActionsHandlers.generateUserActionsHandlers.handleGenerateUser(state, action.payload);
        case Actions.generateUserActions.GENERATE_GROUP_ASSIGNMENT_SUCCESS:
            return ActionsHandlers.generateUserActionsHandlers.handleGenerateUserFailure(state, action.payload);
        case Actions.generateUserActions.GENERATE_GROUP_ASSIGNMENT_FAILURE:
            return ActionsHandlers.generateUserActionsHandlers.handleGenerateUserSuccess(state, action.payload);
        default:
            return state;
    }
};
