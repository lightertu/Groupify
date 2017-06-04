/**
 * Created by rui on 6/1/17.
 */
export const FILTER_PARTICIPANTS = "FILTER_PARTICIPANTS";
let filterParticipants = ( dispatch ) => (payload) => {
    dispatch({ type: FILTER_PARTICIPANTS, payload: payload });
};

export {
    filterParticipants
}