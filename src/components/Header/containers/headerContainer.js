/**
 * Created by rui on 6/4/17.
 */
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import * as Actions from '../../../store/authentication/actions'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Header from '../Header'

const mapDispatchToProps = (dispatch) => ({
    /* not sure what does it do, but it is quite important*/
    /* https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js */
    replace:  (newLocation) => { dispatch(routerActions.replace(newLocation)) },
    push:  (newLocation) => { dispatch(routerActions.push(newLocation)) },
    unauthenticate: Actions.authenticationActions.unauthenticate(dispatch),
})

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authentication.get("jwtToken"),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
