import {connect} from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import DashboardView from '../components/DashboardView'
import * as Actions from "../modules/actions"
import {Map, List, Set} from 'immutable';

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => ({
    /* Survey Dispatch */
    fetchSurveyList: Actions.fetchSurveyListActions.fetchSurveyList(dispatch),
    createSurvey: Actions.createSurveyActions.createSurvey(dispatch),
    updateSurvey: Actions.updateSurveyActions.updateSurvey(dispatch),
    deleteSurvey: Actions.deleteSurveyActions.deleteSurvey(dispatch),

    updateSurveyHolderGetSurvey: Actions.updateSurveyHolderActions.updateSurveyHolderGetSurvey(dispatch),
    updateSurveyHolderSetId: Actions.updateSurveyHolderActions.updateSurveyHolderSetId(dispatch),
    updateSurveyHolderSetTitle: Actions.updateSurveyHolderActions.updateSurveyHolderSetTitle(dispatch),
    updateSurveyHolderQuestionCreate: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionCreate(dispatch),
    updateSurveyHolderQuestionDelete: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionDelete(dispatch),
    updateSurveyHolderQuestionSetType: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionSetType(dispatch),
    updateSurveyHolderQuestionSetTitle: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionSetTitle(dispatch),
    updateSurveyHolderQuestionSetTooltip: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionSetTooltip(dispatch),
    updateSurveyHolderQuestionSetFilter: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionSetFilter(dispatch),
    updateSurveyHolderQuestionToggleFilter: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionToggleFilter(dispatch),
    updateSurveyHolderQuestionToggleFilterMode: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionToggleFilterMode(dispatch),
    updateSurveyHolderQuestionSetAnswersMaximum: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionSetAnswersMaximum(dispatch),
    updateSurveyHolderQuestionSetAnswersMinimum: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionSetAnswersMinimum(dispatch),
    updateSurveyHolderQuestionToggleAnswersMaximum: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionToggleAnswersMaximum(dispatch),
    updateSurveyHolderQuestionToggleAnswersMinimum: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionToggleAnswersMinimum(dispatch),


    updateSurveyViewOpenCreateModal: Actions.updateSurveyViewActions.updateSurveyViewOpenCreateModal(dispatch),
    updateSurveyViewIsCreating: Actions.updateSurveyViewActions.updateSurveyViewIsCreating(dispatch),
    updateSurveyFailedToCreate: Actions.updateSurveyViewActions.updateSurveyFailedToCreate(dispatch),
    updateSurveyCreateError: Actions.updateSurveyViewActions.updateSurveyCreateError(dispatch),


    updateSurveyViewOpenEditModal: Actions.updateSurveyViewActions.updateSurveyViewOpenEditModal(dispatch),
    updateSurveyViewIsEditing: Actions.updateSurveyViewActions.updateSurveyViewIsEditing(dispatch),
    updateSurveyFailedToEdit: Actions.updateSurveyViewActions.updateSurveyFailedToEdit(dispatch),
    updateSurveyEditError: Actions.updateSurveyViewActions.updateSurveyEditError(dispatch),

    
    updateSurveyViewOpenDeleteModal: Actions.updateSurveyViewActions.updateSurveyViewOpenDeleteModal(dispatch),
    updateSurveyViewIsDeleting: Actions.updateSurveyViewActions.updateSurveyViewIsDeleting(dispatch),
    updateSurveyFailedToDelete: Actions.updateSurveyViewActions.updateSurveyFailedToDelete(dispatch),
    updateSurveyDeleteError: Actions.updateSurveyViewActions.updateSurveyDeleteError(dispatch),

    updateSurveyHolderQuestionIndex: Actions.updateSurveyHolderActions.updateSurveyHolderQuestionIndex(dispatch),

    /* Activity Dispatch */
    fetchActivityList: Actions.fetchActivityListActions.fetchActivityList(dispatch),
    createActivity: Actions.createActivityActions.createActivity(dispatch),
    updateActivity: Actions.updateActivityActions.updateActivity(dispatch),
    deleteActivity: Actions.deleteActivityActions.deleteActivity(dispatch),

    createSurveyFromActivity: Actions.createActivityActions.createSurveyFromActivity(dispatch),

    updateActivityHolderGetActivity: Actions.updateActivityHolderActions.updateActivityHolderGetActivity(dispatch),
    updateActivityHolderSetId: Actions.updateActivityHolderActions.updateActivityHolderSetId(dispatch),
    updateActivityHolderSetTitle: Actions.updateActivityHolderActions.updateActivityHolderSetTitle(dispatch),
    updateActivityHolderSetTotalCapacity: Actions.updateActivityHolderActions.updateActivityHolderSetTotalCapacity(dispatch),
    updateActivityHolderSetGroupCapacity: Actions.updateActivityHolderActions.updateActivityHolderSetGroupCapacity(dispatch),
    updateActivityHolderSetCurrentCapacity: Actions.updateActivityHolderActions.updateActivityHolderSetCurrentCapacity(dispatch),
    updateActivityHolderSetEndDate: Actions.updateActivityHolderActions.updateActivityHolderSetEndDate(dispatch),

    updateActivityViewOpenCreateModal: Actions.updateActivityViewActions.updateActivityViewOpenCreateModal(dispatch),
    updateActivityViewIsCreating: Actions.updateActivityViewActions.updateActivityViewIsCreating(dispatch),
    updateActivityFailedToCreate: Actions.updateActivityViewActions.updateActivityFailedToCreate(dispatch),
    updateActivityCreateError: Actions.updateActivityViewActions.updateActivityCreateError(dispatch),

    updateActivityViewSelectingSurvey: Actions.updateActivityViewActions.updateActivityViewSelectingSurvey(dispatch),
    updateActivityViewCreatingSurvey: Actions.updateActivityViewActions.updateActivityViewCreatingSurvey(dispatch),

    updateActivityViewOpenEditModal: Actions.updateActivityViewActions.updateActivityViewOpenEditModal(dispatch),
    updateActivityViewIsEditing: Actions.updateActivityViewActions.updateActivityViewIsEditing(dispatch),
    updateActivityFailedToEdit: Actions.updateActivityViewActions.updateActivityFailedToEdit(dispatch),
    updateActivityEditError: Actions.updateActivityViewActions.updateActivityEditError(dispatch),

    
    updateActivityViewOpenDeleteModal: Actions.updateActivityViewActions.updateActivityViewOpenDeleteModal(dispatch),
    updateActivityViewIsDeleting: Actions.updateActivityViewActions.updateActivityViewIsDeleting(dispatch),
    updateActivityFailedToDelete: Actions.updateActivityViewActions.updateActivityFailedToDelete(dispatch),
    updateActivityDeleteError: Actions.updateActivityViewActions.updateActivityDeleteError(dispatch),

});

const mapStateToProps = (state, ownProps) => {
    return {
        view: ownProps.location.query.view,
        activitiesViewData: state.dashboard.get('activitiesViewData'),
        surveysViewData: state.dashboard.get('surveysViewData'),
        accountSettingsViewData: state.dashboard.get('accountSettingsViewData'),
    }
};

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

 import { createSelector } from 'reselect'
 const counter = (state) => state.counter
 const tripleCount = createSelector(counter, (count) => count * 3)
 const mapStateToProps = (state) => ({
 counter: tripleCount(state)
 })

 Selectors can compute derived data, allowing Redux to store the minimal possible state.
 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 Selectors are composable. They can be used as input to other selectors.
 https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
