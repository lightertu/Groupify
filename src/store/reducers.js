import {combineReducers} from 'redux'
import locationReducer from './location'
import authenticationReducer from './authentication/reducer'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'


export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        authentication: authenticationReducer,
        routing: routerReducer,
        ...asyncReducers
    })
};

export const injectReducer = (store, {key, reducer}) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
