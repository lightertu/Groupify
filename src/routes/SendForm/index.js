import {injectReducer} from '../../store/reducers'

export default (store) => ({
    path: 'sendform',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const SendForm = require('./containers/SendFormContainer').default
            const reducer = require('./modules/sendform').default

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, {key: 'sendform', reducer})

            /*  Return getComponent   */
            cb(null, SendForm)

            /* Webpack named bundle   */
        }, 'sendform')
    }
})
