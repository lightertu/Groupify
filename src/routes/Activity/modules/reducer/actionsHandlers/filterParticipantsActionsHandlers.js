/**
 * Created by rui on 6/1/17.
 */

let handleSetFilter= (state, payload) => {
    return state.set("filter", payload);
};

export {
    handleSetFilter,
}
