let handleErrorDisplay = (state, bool) => {
    return state;
};

let handleErrorTrue = (state) => {
    return  Object.assign({}, state, {
      	errorDisplay: true
      });
};

let handleErrorFalse = (state) => {
    return  Object.assign({}, state, {
        errorDisplay: false
      });
}

let handleErrorMessage = (state, payload) => {
    return  Object.assign({}, state, {
      	errorMessage: payload
      });
};

export {
    handleErrorTrue,
    handleErrorFalse,
    handleErrorMessage,
    handleErrorDisplay
}
