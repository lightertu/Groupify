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
    let newState = (JSON.parse(JSON.stringify(state))),

    participantId = payload.participantId,
    oldGroupNumber = payload.oldGroupNumber,
    newGroupNumber = payload.newGroupNumber,
    participants = newState.participants,
    participantIndex = arrayObjectIndexOf(participants, participantId, "participantId");

    // console.log(JSON.stringify(participantIndex, null, 2));
    participants[participantIndex].groupNumber = newGroupNumber;
    let temp = Object.assign({}, participants[participantIndex]);
    participants.splice(participantIndex, 1);
    participants.push(temp);
    let update = state.set("participants", participants);
    return update;
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
