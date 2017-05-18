import {injectReducer} from '../../store/reducers'

export default (store) => ({
    path: '*',
    stats: 404,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const Counter = require('./containers/PageNotFound').default;
            const reducer = require('./modules/PageNotFound').default;

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, {key: 'PageNotFound', reducer});

            /*  Return getComponent   */
            cb(null, Counter)

            /* Webpack named bundle   */
        }, 'PageNotFound')
    }
})
