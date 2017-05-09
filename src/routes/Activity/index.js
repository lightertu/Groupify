/**
 * Created by rui on 4/7/17.
 */

import {injectReducer} from '../../store/reducers'

export default (store) => ({
    path: 'activity',

    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const Groups = require('./containers/ActivityContainer').default;
            /*  Add the reducer to the store on key 'counter'  */
            // injectReducer(store, {key: 'counter', reducer})
            const reducer = require('./modules/reducer/reducer').default;

            injectReducer(store, {key: 'activity', reducer});

            /*  Return getComponent   */
            cb(null, Groups)

            /* Webpack named bundle   */
        }, 'activity')
    }
})
