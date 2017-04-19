/**
 * Created by rui on 4/18/17.
 */
import * as Actions from "./actions"

const initialState = {
    participants: [],
    groupCapacity: 0,
    totalCapacity: 0
};
export default function groupsReducer (state = initialState, action) {
    switch(action.type) {
        case Actions.FETCH_PARTICIPANT_LIST:
            return state;
            break;
        case Actions.FETCH_PARTICIPANT_LIST_SUCCESS:
            return {
                participants: action.payload.participants,
                groupCapacity: action.payload.groupCapacity,
                totalCapacity: action.payload.totalCapacity
            };
            break;
        case Actions.FETCH_PARTICIPANT_LIST_FAILURE:
            return state;
            break;

    }

    return initialState;
};
