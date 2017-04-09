import {injectReducer} from '../../store/reducers'

export default (store) => ({
    path: 'welcome',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const Welcome = require('./containers/WelcomeContainer').default
            const reducer = require('./modules/welcome').default

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, {key: 'welcome', reducer})

            /*  Return getComponent   */
            cb(null, Welcome)

            /* Webpack named bundle   */
        }, 'welcome')
    }
})
