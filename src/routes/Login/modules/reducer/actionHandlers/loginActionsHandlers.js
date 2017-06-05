import isEmpty from 'lodash/isEmpty'

let handleLogin = (state, payload) => {
    return state.set("authenticating", true)
                .set("authenticationFailed", false)
}

let handleLoginFailure = (state, payload) => {
    return state.set("authenticating", false)
        .set("authenticationFailed", true)
}

let handleLoginSuccess = (state, payload) => {
    return state.set("authenticating", false)
                .set("authenticationFailed", false)
}

let handleHideErrorMessage = (state, payload) => {
    console.log("here");
    return state.set("authenticationFailed", false)
}

export {
    handleLogin,
    handleLoginSuccess,
    handleLoginFailure,
    handleHideErrorMessage
}