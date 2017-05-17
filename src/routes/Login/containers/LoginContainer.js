import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Login from '../../../components/Login'
import * as Actions from '../modules/actions'


const mapDispatchToProps = (dispatch) => ({
	generateUser: Actions.generateUserActions.generateUser(dispatch),
	fetchUser: Actions.fetchUserActions.fetchUser(dispatch),
    logout: Actions.fetchUserActions.logout(dispatch),
    errorDispay: Actions.errorActions.errorDispay(dispatch),
    errorMessage: Actions.errorActions.setErrorMessage(dispatch)
});

const mapStateToProps = (state, ownProps) => {
    return {
    	state: state.login.state,
    	response: state.login.response,
    	loginState: state.login.loginState,
    	login: state.login.login,
    	user: state.login.user,
    	auth: state.login.isAuthenticated,
        errorDispay: state.login.errorDispay,
        errorMessage: state.login.errorMessage
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)
