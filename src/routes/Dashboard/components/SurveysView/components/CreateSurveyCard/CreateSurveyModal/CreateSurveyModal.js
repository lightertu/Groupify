/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal, Message} from "semantic-ui-react";
import SurveyInfoForm from '../../SurveyInfoForm'

import {Map, List, Set, OrderedSet} from 'immutable';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.createSurveyHandler = this.createSurveyHandler.bind(this);
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired
    };

    createSurveyHandler = (e) => {
        
        if (this.props.surveyHolder.get('title').trim().length <= 0) {
            this.props.updateSurveyFailedToCreate(true); 
            this.props.updateSurveyCreateError('THE SURVEY MUST HAVE A TITLE');
            return;
        }

        let questionMissingTitle = this.props.surveyHolder.get('questions').findEntry((question) => 
                (question.get('title').trim().length <= 0)
        )

        if (questionMissingTitle) {
            this.props.updateSurveyFailedToCreate(true); 
            this.props.updateSurveyCreateError('EACH QUESTION MUST HAVE A TITLE');
            return;
        }

        let questionMissingType = this.props.surveyHolder.get('questions').findEntry((question) => 
                (question.get('type').trim().length <= 0)
        )

        if (questionMissingType) {
            this.props.updateSurveyFailedToCreate(true); 
            this.props.updateSurveyCreateError('QUESTION "'
                    + questionMissingType[1].get('title')  
                    +'" MUST HAVE A TYPE');
            return;
        }

        let questionMinHigherThanMax = this.props.surveyHolder.get('questions').findEntry((question) => {
                return (
                    question.get('answersEnableMinimum') && question.get('answersEnableMaximum') 
                        && (question.get('answersMinimum') > question.get('answersMaximum'))
                )
            }
        )

        if (questionMinHigherThanMax ) {
            this.props.updateSurveyFailedToCreate(true); 
            this.props.updateSurveyCreateError('QUESTION "'
                    + questionMinHigherThanMax[1].get('title')  
                    +'" MUST NOT HAVE A MAXIMUM ANSWER LIMIT THAT IS LOWER THAN THE MINIMUM ANSWER LIMIT'
            );
            return;
        }
        this.props.updateSurveyFailedToCreate(false); 
        this.props.updateSurveyCreateError('');
        this.props.createSurvey(this.props.surveyHolder);
    }

    render() {
        return (
            <Modal open={this.props.openCreateModal} size="small" dimmer={false}>
                <Modal.Header> Create Survey </Modal.Header>
                <Modal.Content>
                    <SurveyInfoForm 
                            surveyId={this.props.surveyId}
                            surveyHolder={this.props.surveyHolder}
                            surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex}
                            name={''}
                            updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                            updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                            updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                            updateSurveyHolderQuestionCreate={
                                this.props.updateSurveyHolderQuestionCreate}
                            updateSurveyHolderQuestionDelete={
                                this.props.updateSurveyHolderQuestionDelete}
                            updateSurveyHolderQuestionSetType={
                                this.props.updateSurveyHolderQuestionSetType}
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
                            updateSurveyHolderQuestionIndex={this.props.updateSurveyHolderQuestionIndex}

                          />

                    <Message negative floating hidden={!this.props.failedToCreate}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.createError}</Message.Header>
                    </Message>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative 
                    disabled={this.props.isCreating}
                    onClick={ this.props.onClose }
                    >
                        Cancel
                    </Button>
                    <Button positive
                        disabled={this.props.isCreating}
                        loading={this.props.isCreating}
                        content='Create'
                        onClick={this.createSurveyHandler}
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}
