import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Login from '../components/Login'
import * as Actions from '../modules/actions'


const mapDispatchToProps = (dispatch) => ({
	generateUser: Actions.generateUserActions.generateUser(dispatch)
});

const mapStateToProps = (state, ownProps) => {
    return {
    	token: state
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)
