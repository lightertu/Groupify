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
    sortParticipantsMatch: Actions.userMatchingActions.sortParticipants(dispatch), 
    filterParticipantsMatch: Actions.userMatchingActions.filterParticipants(dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        activityId: ownProps.location.query.id,
        participants: state.activity.get("participants"),
        groupCapacity: state.activity.get("groupCapacity"),
        totalCapacity: state.activity.get("totalCapacity"),
        matching: state.activity.get("matching"),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityView);
