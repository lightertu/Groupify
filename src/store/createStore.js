import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import baseHistory from './baseHistory'
import makeRootReducer from './reducers'
import { updateLocation } from './location'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================

    // ======================================================
    // Store Enhancers
    // ======================================================

    /* create routing middleware */
    const routingMiddleware = routerMiddleware(baseHistory)

    const middleware = [thunk]
    const enhancers = []

    let composeEnhancers = compose

    if (__DEV__) {
        const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            serialize: {
                immutable: Immutable
            }
        });
        if (typeof composeWithDevToolsExtension === 'function') {
            composeEnhancers = composeWithDevToolsExtension
        }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
        if (typeof composeWithDevToolsExtension === 'function') {
            composeEnhancers = composeWithDevToolsExtension
        }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        composeEnhancers(
            applyMiddleware(routingMiddleware),
            applyMiddleware(...middleware),
            ...enhancers
        )
    )

    store.asyncReducers = {}

    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
    // store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default
            store.replaceReducer(reducers(store.asyncReducers))
        })
    }

    return store
}
