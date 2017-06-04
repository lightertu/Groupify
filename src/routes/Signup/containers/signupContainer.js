import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'


/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import SignupView from '../components/SignupView'
import * as Actions from '../modules/actions'

const mapDispatchToProps = (dispatch) => ({
    signup: Actions.signupActions.signup(dispatch),
    replace:  (newLocation) => { dispatch(routerActions.replace(newLocation)) },
    push:  (newLocation) => { dispatch(routerActions.push(newLocation)) },
    hideErrorMessage: () => {dispatch(Actions.signupActions.hideErrorMessage())},
})

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authentication.get("jwtToken"),
        redirect: ownProps.location.query.redirect || '/dashboard',

        /* for UI */
        signingUp: state.signup.get("signingUp"),
        signupSuccess: state.signup.get("signupSuccess"),
        signupFailure: state.signup.get("signupFailure"),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupView)
