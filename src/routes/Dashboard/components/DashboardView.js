import React from 'react'

import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import ActivitiesView from "./ActivitiesView";
import SurveysView from "./SurveysView";
import AccountSettingView from "./AccountSettingView";
import UserIsAuthenticated from '../../UserIsAuthenticated'

const _DashboardContentWrapper = (props) => (
    <div style={ {
        marginTop: "3%",
        width: '100%',
        paddingLeft: "290px",
    } }>
        { props.children }
    </div>
);

const DashboardView = (props) => {
    let renderDashboardView = () => {
        switch (props.view) {
            case("activities"):
                return <ActivitiesView

                            /** Activity Tools**/

                            createActivity={props.createActivity} 
                            updateActivity={props.updateActivity} 
                            deleteActivity={props.deleteActivity} 
                            fetchActivityList={props.fetchActivityList} 

                            activitiesViewData={ props.activitiesViewData }
                            
                                                
                            updateActivityHolderGetActivity={props.updateActivityHolderGetActivity}
                            updateActivityHolderSetId={props.updateActivityHolderSetId}
                            updateActivityHolderSetTitle={props.updateActivityHolderSetTitle}
                            updateActivityHolderSetTotalCapacity={
                                props.updateActivityHolderSetTotalCapacity}
                            updateActivityHolderSetGroupCapacity={
                                props.updateActivityHolderSetGroupCapacity}
                            updateActivityHolderSetCurrentCapacity={
                                props.updateActivityHolderSetCurrentCapacity}
                            updateActivityHolderSetEndDate={props.updateActivityHolderSetEndDate}
                                                        
                            updateActivityViewSelectingSurvey={props.updateActivityViewSelectingSurvey}
                            updateActivityViewCreatingSurvey={props.updateActivityViewCreatingSurvey}

                            updateActivityViewOpenCreateModal={props.updateActivityViewOpenCreateModal}
                            updateActivityViewIsCreating={props.updateActivityViewIsCreating}
                            updateActivityFailedToCreate={props.updateActivityFailedToCreate}
                            updateActivityCreateError={props.updateActivityCreateError}

                            updateActivityViewOpenEditModal={props.updateActivityViewOpenEditModal}
                            updateActivityViewIsEditing={props.updateActivityViewIsEditing}
                            updateActivityFailedToEdit={props.updateActivityFailedToEdit}
                            updateActivityEditError={props.updateActivityEditError}

                            updateActivityViewOpenDeleteModal={props.updateActivityViewOpenDeleteModal}
                            updateActivityViewIsDeleting={props.updateActivityViewIsDeleting}
                            updateActivityFailedToDelete={props.updateActivityFailedToDelete}
                            updateActivityDeleteError={props.updateActivityDeleteError}
               
                            /** Survey Tools**/

                            createSurveyFromActivity={props.createSurveyFromActivity} 
                            
                            createSurvey={props.createSurvey} 
                            updateSurvey={props.updateSurvey} 
                            deleteSurvey={props.deleteSurvey} 
                            fetchSurveyList={props.fetchSurveyList} 

                            surveysViewData={ props.surveysViewData }
                            
                                                
                            updateSurveyHolderGetSurvey={props.updateSurveyHolderGetSurvey}
                            updateSurveyHolderSetId={props.updateSurveyHolderSetId}
                            updateSurveyHolderSetTitle={props.updateSurveyHolderSetTitle}
                            updateSurveyHolderQuestionCreate={props.updateSurveyHolderQuestionCreate}
                            updateSurveyHolderQuestionDelete={props.updateSurveyHolderQuestionDelete}
                            updateSurveyHolderQuestionSetType={props.updateSurveyHolderQuestionSetType}

                            updateSurveyHolderQuestionSetTitle={props.updateSurveyHolderQuestionSetTitle}
                            updateSurveyHolderQuestionSetTooltip={
                                props.updateSurveyHolderQuestionSetTooltip}
                            updateSurveyHolderQuestionSetFilter={
                                props.updateSurveyHolderQuestionSetFilter}
                            updateSurveyHolderQuestionToggleFilter={
                                props.updateSurveyHolderQuestionToggleFilter}
                            updateSurveyHolderQuestionToggleFilterMode={
                                props.updateSurveyHolderQuestionToggleFilterMode}
                            updateSurveyHolderQuestionSetAnswersMaximum={
                                props.updateSurveyHolderQuestionSetAnswersMaximum}
                            updateSurveyHolderQuestionSetAnswersMinimum={
                                props.updateSurveyHolderQuestionSetAnswersMinimum}
                            updateSurveyHolderQuestionToggleAnswersMaximum={
                                props.updateSurveyHolderQuestionToggleAnswersMaximum}
                            updateSurveyHolderQuestionToggleAnswersMinimum={
                                props.updateSurveyHolderQuestionToggleAnswersMinimum}
                            updateSurveyHolderQuestionIndex={props.updateSurveyHolderQuestionIndex}
                                
                            updateSurveyViewOpenCreateModal={props.updateSurveyViewOpenCreateModal}
                            updateSurveyViewIsCreating={props.updateSurveyViewIsCreating}
                            updateSurveyFailedToCreate={props.updateSurveyFailedToCreate}
                            updateSurveyCreateError={props.updateSurveyCreateError}

                            updateSurveyViewOpenEditModal={props.updateSurveyViewOpenEditModal}
                            updateSurveyViewIsEditing={props.updateSurveyViewIsEditing}
                            updateSurveyFailedToEdit={props.updateSurveyFailedToEdit}
                            updateSurveyEditError={props.updateSurveyEditError}

                            updateSurveyViewOpenDeleteModal={props.updateSurveyViewOpenDeleteModal}
                            updateSurveyViewIsDeleting={props.updateSurveyViewIsDeleting}
                            updateSurveyFailedToDelete={props.updateSurveyFailedToDelete}
                            updateSurveyDeleteError={props.updateSurveyDeleteError}
                       />;
            case("surveys"):
                return <SurveysView 
                            createSurvey={props.createSurvey} 
                            updateSurvey={props.updateSurvey} 
                            deleteSurvey={props.deleteSurvey} 
                            fetchSurveyList={props.fetchSurveyList} 

                            surveysViewData={ props.surveysViewData }
                            
                                                
                            updateSurveyHolderGetSurvey={props.updateSurveyHolderGetSurvey}
                            updateSurveyHolderSetId={props.updateSurveyHolderSetId}
                            updateSurveyHolderSetTitle={props.updateSurveyHolderSetTitle}
                            updateSurveyHolderQuestionCreate={props.updateSurveyHolderQuestionCreate}
                            updateSurveyHolderQuestionDelete={props.updateSurveyHolderQuestionDelete}
                            updateSurveyHolderQuestionSetType={props.updateSurveyHolderQuestionSetType}

                            updateSurveyHolderQuestionSetTitle={props.updateSurveyHolderQuestionSetTitle}
                            updateSurveyHolderQuestionSetTooltip={
                                props.updateSurveyHolderQuestionSetTooltip}
                            updateSurveyHolderQuestionSetFilter={
                                props.updateSurveyHolderQuestionSetFilter}
                            updateSurveyHolderQuestionToggleFilter={
                                props.updateSurveyHolderQuestionToggleFilter}
                            updateSurveyHolderQuestionToggleFilterMode={
                                props.updateSurveyHolderQuestionToggleFilterMode}
                            updateSurveyHolderQuestionSetAnswersMaximum={
                                props.updateSurveyHolderQuestionSetAnswersMaximum}
                            updateSurveyHolderQuestionSetAnswersMinimum={
                                props.updateSurveyHolderQuestionSetAnswersMinimum}
                            updateSurveyHolderQuestionToggleAnswersMaximum={
                                props.updateSurveyHolderQuestionToggleAnswersMaximum}
                            updateSurveyHolderQuestionToggleAnswersMinimum={
                                props.updateSurveyHolderQuestionToggleAnswersMinimum}
                            updateSurveyHolderQuestionIndex={props.updateSurveyHolderQuestionIndex}
                                
                            updateSurveyViewOpenCreateModal={props.updateSurveyViewOpenCreateModal}
                            updateSurveyViewIsCreating={props.updateSurveyViewIsCreating}
                            updateSurveyFailedToCreate={props.updateSurveyFailedToCreate}
                            updateSurveyCreateError={props.updateSurveyCreateError}

                            updateSurveyViewOpenEditModal={props.updateSurveyViewOpenEditModal}
                            updateSurveyViewIsEditing={props.updateSurveyViewIsEditing}
                            updateSurveyFailedToEdit={props.updateSurveyFailedToEdit}
                            updateSurveyEditError={props.updateSurveyEditError}

                            updateSurveyViewOpenDeleteModal={props.updateSurveyViewOpenDeleteModal}
                            updateSurveyViewIsDeleting={props.updateSurveyViewIsDeleting}
                            updateSurveyFailedToDelete={props.updateSurveyFailedToDelete}
                            updateSurveyDeleteError={props.updateSurveyDeleteError}
                        />;
            case("accountSettings"):
                return <AccountSettingView accountSettingsViewData={ props.accountSettingsViewData }/>;
            default:
                return <ActivitiesView

                            /** Activity Tools**/

                            createActivity={props.createActivity} 
                            updateActivity={props.updateActivity} 
                            deleteActivity={props.deleteActivity} 
                            fetchActivityList={props.fetchActivityList} 

                            activitiesViewData={ props.activitiesViewData }
                            
                                                
                            updateActivityHolderGetActivity={props.updateActivityHolderGetActivity}
                            updateActivityHolderSetId={props.updateActivityHolderSetId}
                            updateActivityHolderSetTitle={props.updateActivityHolderSetTitle}
                            updateActivityHolderSetTotalCapacity={
                                props.updateActivityHolderSetTotalCapacity}
                            updateActivityHolderSetGroupCapacity={
                                props.updateActivityHolderSetGroupCapacity}
                            updateActivityHolderSetCurrentCapacity={
                                props.updateActivityHolderSetCurrentCapacity}
                            updateActivityHolderSetEndDate={props.updateActivityHolderSetEndDate}
                                                        
                            updateActivityViewSelectingSurvey={props.updateActivityViewSelectingSurvey}
                            updateActivityViewCreatingSurvey={props.updateActivityViewCreatingSurvey}

                            updateActivityViewOpenCreateModal={props.updateActivityViewOpenCreateModal}
                            updateActivityViewIsCreating={props.updateActivityViewIsCreating}
                            updateActivityFailedToCreate={props.updateActivityFailedToCreate}
                            updateActivityCreateError={props.updateActivityCreateError}

                            updateActivityViewOpenEditModal={props.updateActivityViewOpenEditModal}
                            updateActivityViewIsEditing={props.updateActivityViewIsEditing}
                            updateActivityFailedToEdit={props.updateActivityFailedToEdit}
                            updateActivityEditError={props.updateActivityEditError}

                            updateActivityViewOpenDeleteModal={props.updateActivityViewOpenDeleteModal}
                            updateActivityViewIsDeleting={props.updateActivityViewIsDeleting}
                            updateActivityFailedToDelete={props.updateActivityFailedToDelete}
                            updateActivityDeleteError={props.updateActivityDeleteError}
               
                            /** Survey Tools**/

                            createSurveyFromActivity={props.createSurveyFromActivity} 
                            
                            createSurvey={props.createSurvey} 
                            updateSurvey={props.updateSurvey} 
                            deleteSurvey={props.deleteSurvey} 
                            fetchSurveyList={props.fetchSurveyList} 

                            surveysViewData={ props.surveysViewData }
                            
                                                
                            updateSurveyHolderGetSurvey={props.updateSurveyHolderGetSurvey}
                            updateSurveyHolderSetId={props.updateSurveyHolderSetId}
                            updateSurveyHolderSetTitle={props.updateSurveyHolderSetTitle}
                            updateSurveyHolderQuestionCreate={props.updateSurveyHolderQuestionCreate}
                            updateSurveyHolderQuestionDelete={props.updateSurveyHolderQuestionDelete}
                            updateSurveyHolderQuestionSetType={props.updateSurveyHolderQuestionSetType}

                            updateSurveyHolderQuestionSetTitle={
                                props.updateSurveyHolderQuestionSetTitle}
                            updateSurveyHolderQuestionSetTooltip={
                                props.updateSurveyHolderQuestionSetTooltip}
                            updateSurveyHolderQuestionSetFilter={
                                props.updateSurveyHolderQuestionSetFilter}
                            updateSurveyHolderQuestionToggleFilter={
                                props.updateSurveyHolderQuestionToggleFilter}
                            updateSurveyHolderQuestionToggleFilterMode={
                                props.updateSurveyHolderQuestionToggleFilterMode}
                            updateSurveyHolderQuestionSetAnswersMaximum={
                                props.updateSurveyHolderQuestionSetAnswersMaximum}
                            updateSurveyHolderQuestionSetAnswersMinimum={
                                props.updateSurveyHolderQuestionSetAnswersMinimum}
                            updateSurveyHolderQuestionToggleAnswersMaximum={
                                props.updateSurveyHolderQuestionToggleAnswersMaximum}
                            updateSurveyHolderQuestionToggleAnswersMinimum={
                                props.updateSurveyHolderQuestionToggleAnswersMinimum}
                            updateSurveyHolderQuestionIndex={props.updateSurveyHolderQuestionIndex}
                                
                            updateSurveyViewOpenCreateModal={props.updateSurveyViewOpenCreateModal}
                            updateSurveyViewIsCreating={props.updateSurveyViewIsCreating}
                            updateSurveyFailedToCreate={props.updateSurveyFailedToCreate}
                            updateSurveyCreateError={props.updateSurveyCreateError}

                            updateSurveyViewOpenEditModal={props.updateSurveyViewOpenEditModal}
                            updateSurveyViewIsEditing={props.updateSurveyViewIsEditing}
                            updateSurveyFailedToEdit={props.updateSurveyFailedToEdit}
                            updateSurveyEditError={props.updateSurveyEditError}

                            updateSurveyViewOpenDeleteModal={props.updateSurveyViewOpenDeleteModal}
                            updateSurveyViewIsDeleting={props.updateSurveyViewIsDeleting}
                            updateSurveyFailedToDelete={props.updateSurveyFailedToDelete}
                            updateSurveyDeleteError={props.updateSurveyDeleteError}
                       />;
        }
    };

    return (
            <div>
                <DashboardSideMenu view={ props.view }/>
                <_DashboardContentWrapper>
                    { renderDashboardView() }
                </_DashboardContentWrapper>
            </div>
        )
    };

export default DashboardView;
