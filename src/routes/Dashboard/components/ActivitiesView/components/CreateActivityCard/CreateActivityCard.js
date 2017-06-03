/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import CreateActivityModal from './CreateActivityModal'
import ActivityInfoForm from '../ActivityInfoForm/ActivityInfoForm'

export default class CreateActivityCard extends React.Component {
    constructor (props) {
        super(props)
    }

    /* handlers for opening and closing the modals */
    openCreateActivityModalHandler = () => {
        this.props.updateActivityHolderGetActivity(null);
        this.props.updateActivityViewOpenCreateModal(true);
    }

    closeCreateActivityModalHandler = () => {
        this.props.updateActivityViewOpenCreateModal(false);
    }

    render () {
        return (
            <Card style={{minHeight:'238.16px', maxWidth: '269.5px', backgroundColor: "#e5e7e8"}} 
                onClick={this.openCreateActivityModalHandler}
            >
                <CreateActivityModal onClose={this.closeCreateActivityModalHandler }
                    createActivity={this.props.createActivity} 
                    activityHolder={this.props.activityHolder} 
                                           
                    createSurveyFromActivity={this.props.createSurveyFromActivity} 
                      
                    fetchActivityList={this.props.fetchActivityList}
                    updateActivityViewIsCreating={this.props.updateActivityViewIsCreating}
                    updateActivityFailedToCreate={this.props.updateActivityFailedToCreate}
                    updateActivityCreateError={this.props.updateActivityCreateError}

                    updateActivityViewSelectingSurvey={this.props.updateActivityViewSelectingSurvey}
                    updateActivityViewCreatingSurvey={this.props.updateActivityViewCreatingSurvey}

                    creatingSurvey={this.props.creatingSurvey} 
                    selectingSurvey={this.props.selectingSurvey} 

                    openCreateModal={this.props.openCreateModal} 
                    isCreating={this.props.isCreating} 
                    failedToCreate={this.props.failedToCreate} 
                    createError={this.props.createError} 

                    updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                    updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                    updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                    updateActivityHolderSetTotalCapacity={
                        this.props.updateActivityHolderSetTotalCapacity}
                    updateActivityHolderSetGroupCapacity={
                        this.props.updateActivityHolderSetGroupCapacity}
                    updateActivityHolderSetCurrentCapacity={
                        this.props.updateActivityHolderSetCurrentCapacity}
                    updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}

                    /** Survey Tools (For survey creation selection) **/ 
                    surveys={this.props.surveys} 
                    surveyHolder={this.props.surveyHolder} 
                    surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex} 

                    createSurvey={this.props.createSurvey} 

                    fetchSurveyList={this.props.fetchSurveyList}

                    updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                    updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                    updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                    updateSurveyHolderQuestionCreate={this.props.updateSurveyHolderQuestionCreate}
                    updateSurveyHolderQuestionDelete={this.props.updateSurveyHolderQuestionDelete}
                    updateSurveyHolderQuestionSetType={this.props.updateSurveyHolderQuestionSetType}
                    updateSurveyHolderQuestionSetTitle={this.props.updateSurveyHolderQuestionSetTitle}
                    updateSurveyHolderQuestionSetTooltip={
                        this.props.updateSurveyHolderQuestionSetTooltip}
                    updateSurveyHolderQuestionSetFilter={this.props.updateSurveyHolderQuestionSetFilter}
                    updateSurveyHolderQuestionToggleFilter={
                        this.props.updateSurveyHolderQuestionToggleFilter}
                    updateSurveyHolderQuestionToggleFilterMode={
                        this.props.updateSurveyHolderQuestionToggleFilterMode}
                    updateSurveyHolderQuestionSetAnswersMaximum={
                        this.props.updateSurveyHolderQuestionSetAnswersMaximum}
                    updateSurveyHolderQuestionSetAnswersMinimum={
                        this.props.updateSurveyHolderQuestionSetAnswersMinimum}
                    updateSurveyHolderQuestionToggleAnswersMaximum={
                        this.props.updateSurveyHolderQuestionToggleAnswersMaximum}
                    updateSurveyHolderQuestionToggleAnswersMinimum={
                        this.props.updateSurveyHolderQuestionToggleAnswersMinimum}
                    updateSurveyHolderQuestionIndex={this.props.updateSurveyHolderQuestionIndex}

                    updateSurveyViewOpenCreateModal={this.props.updateSurveyViewOpenCreateModal}
                    updateSurveyViewIsCreating={this.props.updateSurveyViewIsCreating}
                    updateSurveyFailedToCreate={this.props.updateSurveyFailedToCreate}
                    updateSurveyCreateError={this.props.updateSurveyCreateError}
                />

                <div style={{ textAlign: "center", position: "relative", top: "47%", opacity: 0.2, }}>
                    <Header>
                        <Icon name='plus' />
                        New Activity
                    </Header>
                </div>
            </Card>
        )
    }
}
