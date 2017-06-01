/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import CreateSurveyModal from './CreateSurveyModal'
import SurveyInfoForm from '../SurveyInfoForm/SurveyInfoForm'

export default class CreateSurveyCard extends React.Component {
    constructor (props) {
        super(props)
    }

    /* handlers for opening and closing the modals */
    openCreateSurveyModalHandler = () => {
        this.props.updateSurveyHolderGetSurvey(null);
        this.props.updateSurveyViewOpenCreateModal(true);
    }

    closeCreateSurveyModalHandler = () => {
        this.props.updateSurveyViewOpenCreateModal(false);
    }

    render () {
        return (
            <Card style={{minHeight:'188.72px', maxWidth: '269.5px', backgroundColor: "#e5e7e8"}} onClick={this.openCreateSurveyModalHandler}>

                <CreateSurveyModal onClose={this.closeCreateSurveyModalHandler }
                        createSurvey={this.props.createSurvey}
                        surveyHolder={this.props.surveyHolder}
                        surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex}

                        fetchSurveyList={this.props.fetchSurveyList}
                        updateSurveyViewIsCreating={this.props.updateSurveyViewIsCreating}
                        updateSurveyFailedToCreate={this.props.updateSurveyFailedToCreate}
                        updateSurveyCreateError={this.props.updateSurveyCreateError}

                        openCreateModal={this.props.openCreateModal} 
                        isCreating={this.props.isCreating} 
                        failedToCreate={this.props.failedToCreate} 
                        createError={this.props.createError} 

                        updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                        updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                        updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                        updateSurveyHolderQuestionCreate={this.props.updateSurveyHolderQuestionCreate}
                        updateSurveyHolderQuestionDelete={this.props.updateSurveyHolderQuestionDelete}
                        updateSurveyHolderQuestionSetType={this.props.updateSurveyHolderQuestionSetType}
                        updateSurveyHolderQuestionSetTitle={
                            this.props.updateSurveyHolderQuestionSetTitle}
                        updateSurveyHolderQuestionSetTooltip={
                            this.props.updateSurveyHolderQuestionSetTooltip}
                        updateSurveyHolderQuestionSetFilter={
                            this.props.updateSurveyHolderQuestionSetFilter}
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
                        updateSurveyHolderQuestionIndex={
                            this.props.updateSurveyHolderQuestionIndex}

                 />

                <div style={{ textAlign: "center",
                              position: "relative",
                              top: "47%",
                              opacity: 0.2, }}>
                    <Header>
                        <Icon name='plus' />
                        New Survey
                    </Header>
                </div>
            </Card>
        )
    }
}
