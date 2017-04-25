/**
 * Created by rui on 4/7/17.
 */
import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case */

import ActivityView from '../components/ActivityView'
import * as Actions from "../modules/actions"

const mapDispatchToProps = (dispatch) => ({
    fetchParticipantList: Actions.fetchParticipantList(dispatch),
    updateParticipantGroupNumber: Actions.updateParticipantGroupNumber(dispatch)
});

const mapStateToProps = (state) => {
    return {
        participants: state.activity.participants,
        groupCapacity: state.activity.groupCapacity,
        totalCapacity: state.activity.totalCapacity
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityView);
