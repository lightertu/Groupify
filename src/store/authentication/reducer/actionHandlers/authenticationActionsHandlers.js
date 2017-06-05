import isEmpty from 'lodash/isEmpty'

let handleAuthenticationSuccess = (state, token) => {
    return state.set('jwtToken', token)
}

let handleUnauthenticationSuccess = (state, payload) => {
    return state.set('jwtToken', null)
}
export {
    handleAuthenticationSuccess,
    handleUnauthenticationSuccess
}