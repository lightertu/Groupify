/**
 * Created by rui on 5/9/17.
 */


// TODO: needs to be implemented

let handleFetchParticipantList = (state, payload) => {
    return state;
};
let handleFetchParticipantListSuccess = (state, payload) => {
    return Object.assign({}, state, {
        participants: payload.participants,
        groupCapacity: payload.groupCapacity,
        totalCapacity: payload.totalCapacity
    });
};

let handleFetchParticipantListFailure = (state, payload) => {
    return state;
};

export {
    handleFetchParticipantList,
    handleFetchParticipantListSuccess,
    handleFetchParticipantListFailure
}
