/**
 * Created by rui on 4/18/17.
 */
import * as Actions from "../actions"
import * as ActionsHandlers from "./actionsHandlers"

const initialState = {
    participants: [],
    groupCapacity: 0,
    totalCapacity: 0,
    matching: {
        current: "",
        matchingParticipants: new Set(),
        attributes: {}
    }
};

export default function activityReducer (state = initialState, action) {
    switch(action.type) {

        /* reduce fetch actions */
        case Actions.fetchParticipantListActions.FETCH_PARTICIPANT_LIST:
            return ActionsHandlers.fetchParticipantListActionsHandlers.handleFetchParticipantList(state, action.payload);
        case Actions.fetchParticipantListActions.FETCH_PARTICIPANT_LIST_SUCCESS:
            return ActionsHandlers.fetchParticipantListActionsHandlers.handleFetchParticipantListSuccess(state, action.payload);
        case Actions.fetchParticipantListActions.FETCH_PARTICIPANT_LIST_FAILURE:
            return ActionsHandlers.fetchParticipantListActionsHandlers.handleFetchParticipantListFailure(state, action.payload);

        /* reduce update single participant number actions */
        case Actions.updateParticipantGroupNumberActions.UPDATE_PARTICIPANT_GROUP_NUMBER:
            return ActionsHandlers.updateParticipantGroupNumberActionsHandlers.handleUpdateParticipantGroupsNumber(state, action.payload);
        case Actions.updateParticipantGroupNumberActions.UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS:
            return ActionsHandlers.updateParticipantGroupNumberActionsHandlers.handleUpdateParticipantGroupsNumberSuccess(state, action.payload);
        case Actions.updateParticipantGroupNumberActions.UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE:
            return ActionsHandlers.updateParticipantGroupNumberActionsHandlers.handleUpdateParticipantGroupsNumberFailure(state, action.payload);

        /* reduce group assignment actions */
        case Actions.generateGroupAssignmentActions.GENERATE_GROUP_ASSIGNMENT:
            return ActionsHandlers.generateGroupAssignmentActionsHandlers.handleGenerateGroupAssignment(state, action.payload);
        case Actions.generateGroupAssignmentActions.GENERATE_GROUP_ASSIGNMENT_SUCCESS:
            return ActionsHandlers.generateGroupAssignmentActionsHandlers.handleGenerateGroupAssignmentFailure(state, action.payload);
        case Actions.generateGroupAssignmentActions.GENERATE_GROUP_ASSIGNMENT_FAILURE:
            return ActionsHandlers.generateGroupAssignmentActionsHandlers.handleGenerateGroupAssignmentSuccess(state, action.payload);
        default:
            return state;
    }
};
