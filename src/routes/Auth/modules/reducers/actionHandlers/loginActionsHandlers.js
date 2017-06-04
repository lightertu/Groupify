import isEmpty from 'lodash/isEmpty'

let handleLogin = (state, payload) => {
    return state.set('authenticating', true)
}

let handleLoginSuccess = (state, payload) => {
    return state.set('authenticating', false)
                .set('jwtToken', payload.token)
}

export {
    handleLogin
}