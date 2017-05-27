/**
 * Created by rui on 5/9/17.
 */

// TODO: needs to be implemented

let handleFetchParticipantList = (state, payload) => {
    return state;
};
let handleFetchParticipantListSuccess = (state, payload) => {
    let update = state.set("participants", payload.participants);
    update = update.set("groupCapacity", payload.groupCapacity);
    update = update.set("totalCapacity", payload.totalCapacity)
    return update
};

let handleFetchParticipantListFailure = (state, payload) => {
    return state;
};

export {
    handleFetchParticipantList,
    handleFetchParticipantListSuccess,
    handleFetchParticipantListFailure
}
