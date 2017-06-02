// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import LoginRoute from './Login'
import ActivityRoute from './Activity'
import CounterRoute from './Counter'
import WelcomeRoute from './Welcome'
import Dashboard from './Dashboard'
import Survey from './Survey'
import AuthRoute from './Auth'
import PageNotFound from './PageNotFound'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'


const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
})

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => {
    const history = syncHistoryWithStore(browserHistory, store)
    return {
        path: '/',
        history: history,
        component: CoreLayout,
        indexRoute: WelcomeRoute,
        childRoutes: [
            CounterRoute(store),
            ActivityRoute(store),
            LoginRoute(store),
            AuthRoute(store),
            Dashboard(store),
            Survey(store),
            PageNotFound(store),
        ]
    }
}

/*
 getChildRoutes (location, cb) {
 require.ensure([], (require) => {
 cb(null, [
 // Remove imports!
 require('./Counter').default(store)
 ])
 })
 }
 */
/*  Note: childRoutes can be chunked or otherwise loaded programmatically
 using getChildRoutes with the following signature:


 However, this is not necessary for code-splitting! It simply provides
 an API for async route definitions. Your code splitting should occur
 inside the route `getComponent` function, since it is only invoked
 when the route exists and matches.
 */

export default createRoutes
