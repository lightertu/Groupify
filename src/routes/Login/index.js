import { injectReducer } from '../../store/reducers'
import { Map, List } from 'immutable'
import * as Actions from './modules/actions'


export default (store) => ({
    path: 'login',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const reducer = require('./modules/reducer').default
            const Login = require('./containers/loginContainer').default
            /*  The reducer is merged with global reducer */
            injectReducer(store, {key: 'login', reducer})

            /*  Return getComponent   */
            cb(null, Login)

            /* Webpack named bundle   */
        }, 'login')
    }
});
