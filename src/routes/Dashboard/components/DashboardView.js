import React from 'react'

import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import ActivitiesView from "./ActivitiesView";
import SurveysView from "./SurveysView";
import AccountSettingView from "./AccountSettingView";

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
                return <ActivitiesView activitiesViewData={ props.activitiesViewData } />;
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
                        updateSurveyHolderQuestionSetTooltip={props.updateSurveyHolderQuestionSetTooltip}
                        updateSurveyHolderQuestionSetFilter={props.updateSurveyHolderQuestionSetFilter}
                        updateSurveyHolderQuestionToggleFilter={props.updateSurveyHolderQuestionToggleFilter}
                        updateSurveyHolderQuestionToggleFilterMode={props.updateSurveyHolderQuestionToggleFilterMode}
                        updateSurveyHolderQuestionSetAnswersMaximum={props.updateSurveyHolderQuestionSetAnswersMaximum}
                        updateSurveyHolderQuestionSetAnswersMinimum={props.updateSurveyHolderQuestionSetAnswersMinimum}
                        updateSurveyHolderQuestionToggleAnswersMaximum={props.updateSurveyHolderQuestionToggleAnswersMaximum}
                        updateSurveyHolderQuestionToggleAnswersMinimum={props.updateSurveyHolderQuestionToggleAnswersMinimum}
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
                return <ActivitiesView activitiesViewData={ props.activitiesViewData }/>;
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
