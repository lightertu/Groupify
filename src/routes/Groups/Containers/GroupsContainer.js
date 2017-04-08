/**
 * Created by rui on 4/7/17.
 */
import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case */

import Groups from '../components/GroupsView'


const mapDispatchToProps = (dispatch) => {
    // TODO: dispatch functions
    return { something: 1 };
}

const mapStateToProps = (state) => ({
    counter: state.counter
})


export default connect(mapStateToProps, mapDispatchToProps)(Groups)
