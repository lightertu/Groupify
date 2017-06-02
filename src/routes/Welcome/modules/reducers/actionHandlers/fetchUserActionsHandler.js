let handleFetchUser = (state, payload) => {
    return  Object.assign({}, state, {
      	loginState: "fetching user",
        response: {},
        login: {},
        state: "waiting"
      });
};
let handleFetchUserSuccess = (state, payload) => {
  if(!payload.data.message) {
    payload.data.message = "logged in"
  }
	state.login = payload.data;
	state.Loginstate = "fetch success"
    return  Object.assign({}, state, {
      	login: payload.data,
      	loginState: "fetching success",
        response: {},
        state: "waiting"
      });
};
let handleFetchUserFailure = (state, payload) => {
    state.login = payload.data;
    state.loginState = "generation failure"
    return  Object.assign({}, state, {
      	login: {},
      	loginState: "fetching failure"
      });
};

export {
    handleFetchUser,
    handleFetchUserSuccess,
    handleFetchUserFailure
}
