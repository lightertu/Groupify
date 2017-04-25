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

let handleFetchParticipantListSuccess = (payload) => {
    return {
        participants: payload.participants,
        groupCapacity: payload.groupCapacity,
        totalCapacity: payload.totalCapacity
    };
};

function handleUpdateParticipantGroupsNumber (state, payload) {
    let newState = (JSON.parse(JSON.stringify(state))),

        participantId = payload.participantId,
        oldGroupNumber = payload.oldGroupNumber,
        newGroupNumber = payload.newGroupNumber,
        participantIndex = arrayObjectIndexOf(newState.participants, participantId, "participantId");

    console.log(JSON.stringify(participantIndex, null, 2));
    newState.participants[participantIndex].groupNumber = newGroupNumber;
    let temp = Object.assign({}, newState.participants[participantIndex]);
    newState.participants.splice(participantIndex, 1);
    newState.participants.push(temp);

    return newState;
}

export default function activityReducer (state = initialState, action) {
    switch(action.type) {
        case Actions.FETCH_PARTICIPANT_LIST:
            return state;
        case Actions.FETCH_PARTICIPANT_LIST_SUCCESS:
            return handleFetchParticipantListSuccess(action.payload);
        case Actions.FETCH_PARTICIPANT_LIST_FAILURE:
            return state;
        case Actions.UPDATE_PARTICIPANT_GROUP_NUMBER:
            //console.log(JSON.stringify(state, null, 2));
            return handleUpdateParticipantGroupsNumber(state, action.payload);
            //console.log(JSON.stringify(state, null, 2));
            return state;
        case Actions.UPDATE_PARTICIPANT_GROUP_NUMBER_SUCCESS:
            return state;
        case Actions.UPDATE_PARTICIPANT_GROUP_NUMBER_FAILURE:
            // TODO: revert the change
            return state;
    }

    return initialState;
};
