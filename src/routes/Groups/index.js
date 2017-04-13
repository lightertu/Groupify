/**
 * Created by rui on 4/7/17.
 */


export default (store) => ({
    path: 'groups',

    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const Groups = require('./containers/GroupsContainer').default
            /*  Add the reducer to the store on key 'counter'  */
            // injectReducer(store, {key: 'counter', reducer})

            /*  Return getComponent   */
            cb(null, Groups)

            /* Webpack named bundle   */
        }, 'counter')
    }
})
