import {injectReducer} from '../../store/reducers'

export default (store) => ({
    path: 'survey',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const Survey = require('./containers/SurveyContainer').default;
            const reducer = require('./modules/reducer').default;

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, {key: 'survey', reducer});

            /*  Return getComponent   */
            cb(null, Survey)

            /* Webpack named bundle   */
        }, 'survey')
    }
})
