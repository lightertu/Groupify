import isEmpty from 'lodash/isEmpty'

let handleSignup = (state, payload) => {
    return state.set("signingUp", false)
                .set("signupFailure", false)
                .set("signupSuccess", false)
}

let handleSignupFailure = (state, payload) => {
    return state.set("signingUp", false)
        .set("signupFailure", true)
        .set("signupSuccess", false)
}

let handleSignupSuccess = (state, payload) => {
    return state.set("signingUp", false)
        .set("signupFailure", false)
        .set("signupSuccess", true)
}

let handleHideErrorMessages = (state, payload) => {
    return state.set("signingUp", false)
        .set("signupFailure", false)
        .set("signupSuccess", false)
}

export {
    handleSignup,
    handleSignupSuccess,
    handleSignupFailure,
    handleHideErrorMessages
}