import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './store/createStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppContainer from './containers/AppContainer'
import setAuthorizationToken from './components/utils/setAuthorizationToken'
import { applyMiddleware, compose } from 'redux'
import axios from 'axios';

// imports for web auth
import jwt from 'jsonwebtoken'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import baseHistory from "./store/baseHistory"
import { syncHistoryWithStore } from 'react-router-redux'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__

const store = createStore(initialState)

const history = syncHistoryWithStore(baseHistory, store)
// set auth token

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
    const routes = require('./routes/index').default(store)

    //always grab the token from local storage to solve inconsistency
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwtToken");

    ReactDOM.render(
        <Provider store={ store }>
            <div>
                <Router history={ history } children={ routes }>
                </Router>
            </div>
        </Provider>
        , MOUNT_NODE
    )
}

// This code is excluded from production bundle
if (__DEV__) {
    if (module.hot) {
        // Development render functions
        const renderApp = render
        const renderError = (error) => {
            const RedBox = require('redbox-react').default

            ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE)
        }

        // Wrap render in try/catch
        render = () => {
            try {
                renderApp()
            } catch (error) {
                console.error(error)
                renderError(error)
            }
        }

        // Setup hot module replacement
        module.hot.accept('./routes/index', () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE)
                render()
            })
        )
    }
}

// ========================================================
// Go!
// ========================================================

render()

