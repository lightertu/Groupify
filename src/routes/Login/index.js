import { injectReducer } from '../../store/reducers'
import { Map, List } from 'immutable'
import * as Actions from './modules/actions'

const initialState = Map({
    isLoginSuccess: false,
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(Actions.loginActions.LOGIN):
            return state

        case(Actions.loginActions.LOGIN_SUCCESS):
            return state

        case(Actions.loginActions.LOGIN_FAILURE):
            return state.set("isLoginSuccess", true);

        case(Actions.logoutActions.LOGOUT):
            return state
    }

    return state
}


export default (store) => ({
    path: 'login',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const Login = require('./containers/loginContainer').default
            const loginReducer = require('./modules/reducer').default
            console.log(loginReducer);
            console.log(reducer);
            /*  The reducer is merged with global reducer */
            injectReducer(store, {key: 'login', reducer: loginReducer})

            /*  Return getComponent   */
            cb(null, Login)

            /* Webpack named bundle   */
        }, 'login')
    }
});
