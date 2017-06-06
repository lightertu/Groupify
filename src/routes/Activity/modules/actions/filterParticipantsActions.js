/**
 * Created by rui on 6/1/17.
 */
export const SET_FILTER = "SET_FILTER";
let setFilter = ( dispatch ) => (payload) => {
    dispatch({ type: SET_FILTER, payload: payload });
};

export {
    setFilter
}
