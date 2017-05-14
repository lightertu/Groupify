let handleGenerateUser = (state, payload) => {
    return  Object.assign({}, state, {
      	state: "generating user",
        response: {}
      });
};
let handleGenerateUserSuccess = (state, payload) => {
	state.response = payload.data;
	state.state = "generation success"
    return  Object.assign({}, state, {
      	response: payload.data,
      	state: "generation success"
      });
};
let handleGenerateUserFailure = (state, payload) => {
    state.response = payload.data;
    state.state = "generation failure"
    return  Object.assign({}, state, {
      	response: {},
      	state: "generation failure"
      });
};

export {
    handleGenerateUser,
    handleGenerateUserSuccess,
    handleGenerateUserFailure
}
