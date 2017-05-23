import {connect} from 'react-redux'
import * as Actions from "../modules/actions"

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import DashboardView from '../components/DashboardView'

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => ({
    fetchActivityList: Actions.fetchActivityListActions.fetchActivityList(dispatch),
    createActivity: Actions.createActivityActions.createActivity(dispatch),
    updateActivity: Actions.updateActivityActions.updateActivity(dispatch),
    updateUserProfile: Actions.updateUserProfileActions.updateUserProfile(dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        authorizationToken: state.authorizationToken,
        view: ownProps.location.query.view,
        activitiesViewData: state.dashboard.activitiesViewData,
        accountSettingsViewData: state.dashboard.accountSettingsViewData,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
