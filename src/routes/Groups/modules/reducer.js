/**
 * Created by rui on 4/18/17.
 */
import * as Actions from "./actions"

const initialState = {
    participants: [],
    groupCapacity: 0,
    totalCapacity: 0
};


let arrayObjectIndexOf = (myArray, searchTerm, property) => {
    for(let i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) {
            return i;
        }
    }
    return -1;
};


let handleUpdateParticipantGroupsNumber = (state, payload) => {
    let newState = Object.assign({}, state),
        participantId = payload.participantId,
        oldGroupNumber = payload.oldGroupNumber,
        newGroupNumber = payload.newGroupNumber,
        participantIndex = arrayObjectIndexOf(newState.participants, participantId, "participantId");

    //console.log(JSON.stringify(participantIndex, null, 2));
    newState.participants[participantIndex].groupNumber = newGroupNumber;
    return newState;
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
        case Actions.UPDATE_PARTICIPANT_GROUP_NUMBER:
            handleUpdateParticipantGroupsNumber(state, action.payload);
            return state;
        case Actions.UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS:
            return state;
        case Actions.UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE:
            // TODO: revert the change
            return state;

    }

    return initialState;
};
