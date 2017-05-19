import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './store/createStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppContainer from './containers/AppContainer'
import setAuthorizationToken from './components/utils/setAuthorizationToken'

// imports for web auth
import jwt from 'jsonwebtoken'
import { setCurrentUser } from './routes/Login/modules/actions/authActions'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

// set auth token
if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken)
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
    const routes = require('./routes/index').default(store)

    ReactDOM.render(
        <AppContainer store={store} routes={routes}/>
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

