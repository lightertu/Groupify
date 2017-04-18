/**
 * Created by rui on 4/7/17.
 */
import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case */

import GroupsView from '../components/GroupsView'


const mapDispatchToProps = (dispatch) => {
    // TODO: dispatch functions
    return { something: 1 };
};

const mapStateToProps = (state) => ({
    participants: state.participants
});



export default connect(mapStateToProps, mapDispatchToProps)(GroupsView)
