import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'


/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import LoginView from '../components/LoginView'
import * as Actions from '../modules/actions'

const mapDispatchToProps = (dispatch) => ({
    login: Actions.loginActions.login(dispatch),
    /* not sure what does it do, but it is quite important*/
    /* https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js */
    replace:  (newLocation) => { dispatch(routerActions.replace(newLocation)) },
    push:  (newLocation) => { dispatch(routerActions.push(newLocation)) },
    hideErrorMessage: () => {dispatch(Actions.loginActions.hideErrorMessage())},
    logout: Actions.logoutActions.logout(dispatch),
})

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authentication.get("jwtToken"),
        redirect: ownProps.location.query.redirect || '/dashboard',

        /* for UI */
        authenticating: state.login.get("authenticating"),
        authenticationFailed: state.login.get("authenticationFailed"),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
