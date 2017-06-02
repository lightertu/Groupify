/**
 * Created by rui on 6/1/17.
 */

let handleFilterParticipants = (state, payload) => {
    return state.set("filter", payload);
};

export {
    handleFilterParticipants,
}
