/**
 * Created by rui on 5/9/17.
 */

// TODO: needs to be implemented

let arrayObjectIndexOf = (myArray, searchTerm, property) => {
    for(let i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) {
            return i;
        }
    }
    return -1;
};

let handleUpdateParticipantGroupsNumber = (state, payload) => {
    console.log(payload)
        console.log(state)
    let index = state.get('participants')
                .findIndex((participant) => (participant.get('participantId') === payload.participantId)) 
    let newState = ((index == -1) ?
            state.setIn(['participants', index], payload.newGroupNumber)
        :
            state)
    
    return newState;
};

let handleUpdateParticipantGroupsNumberSuccess = (state, payload) => {
    return state;
};

let handleUpdateParticipantGroupsNumberFailure = (state, payload) => {
    return state;
};

export {
    handleUpdateParticipantGroupsNumber,
    handleUpdateParticipantGroupsNumberSuccess,
    handleUpdateParticipantGroupsNumberFailure,
}
