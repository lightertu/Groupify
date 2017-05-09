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
    fetchParticipantList: Actions.fetchParticipantListActions.fetchParticipantList(dispatch),
    updateParticipantGroupNumber: Actions.updateParticipantGroupNumberActions.updateParticipantGroupNumber(dispatch),
    generateGroupAssignment: Actions.generateGroupAssignmentActions.generateGroupAssignment(dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        activityId: ownProps.location.query.id,
        participants: state.activity.participants,
        groupCapacity: state.activity.groupCapacity,
        totalCapacity: state.activity.totalCapacity,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityView);
