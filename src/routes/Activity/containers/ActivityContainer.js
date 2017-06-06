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
import UserIsAuthenticated from '../../UserIsAuthenticated'


const mapDispatchToProps = (dispatch) => ({
    fetchParticipantList: Actions.fetchParticipantListActions.fetchParticipantList(dispatch),
    updateParticipantGroupNumber: Actions.updateParticipantGroupNumberActions.updateParticipantGroupNumber(dispatch),
    generateGroupAssignment: Actions.generateGroupAssignmentActions.generateGroupAssignment(dispatch),
    sortParticipantsMatch: Actions.userMatchingActions.sortParticipants(dispatch), 
    filterParticipantsMatch: Actions.userMatchingActions.filterParticipants(dispatch),
    setFilter: Actions.filterParticipantsActions.setFilter(dispatch),
    toggleLock: Actions.groupLockActions.toggleLock(dispatch)
});

const mapStateToProps = (state, ownProps) => {
    return {
        activityId: ownProps.location.query.id,

        groupCapacity: state.activity.get("groupCapacity"),
        totalCapacity: state.activity.get("totalCapacity"),

        participants: state.activity.get("participants"),

        lockedGroups: state.activity.get("lockedGroups"),

        allAnswers: state.activity.get("allAnswers"),
        filter: state.activity.get("filter"),

        isRunningAlgorithm: state.activity.get("isRunningAlgorithm"),
    }
};

export default UserIsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(ActivityView));
