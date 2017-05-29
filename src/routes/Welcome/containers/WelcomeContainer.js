import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Welcome from './Welcome'
import * as Actions from '../modules/actions'


const mapDispatchToProps = (dispatch) => ({
	generateUser: Actions.generateUserActions.generateUser(dispatch),
	fetchUser: Actions.fetchUserActions.fetchUser(dispatch),
    logout: Actions.fetchUserActions.logout(dispatch),
    setErrorDisplay: Actions.errorActions.setErrorDisplay(dispatch),
    setErrorMessage: Actions.errorActions.setErrorMessage(dispatch),
    setErrorColor: Actions.errorActions.setErrorColor(dispatch)
});

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
    	state: state.welcome.state,
    	response: state.welcome.response,
    	loginState: state.welcome.loginState,
    	login: state.welcome.login,
    	user: state.welcome.user,
    	auth: state.welcome.isAuthenticated,
        errorDisplay: state.welcome.errorDisplay,
        errorMessage: state.welcome.errorMessage,
        errorColor: state.welcome.errorColor
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
