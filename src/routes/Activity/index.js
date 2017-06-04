/**
 * Created by rui on 4/7/17.
 */

import {injectReducer} from '../../store/reducers'
import UserIsAuthenticated from "../UserIsAuthenticated"

export default (store) => ({
    path: 'activity',

    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const activity = require('./containers/ActivityContainer').default;
            const securedActivity = UserIsAuthenticated(activity);
            /*  Add the reducer to the store on key 'counter'  */
            const reducer = require('./modules/reducer/reducer').default;

            injectReducer(store, {key: 'activity', reducer});

            /*  Return getComponent   */
            cb(null, securedActivity)

            /* Webpack named bundle   */
        }, 'activity')
    }
})
