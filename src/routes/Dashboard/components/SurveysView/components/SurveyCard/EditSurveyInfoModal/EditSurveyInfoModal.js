/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Modal, Message } from 'semantic-ui-react'
import SurveyInfoForm from "../../SurveyInfoForm"

import {Map, List, Set, OrderedSet} from 'immutable';

export default class EditSurveyInfoModal extends React.Component {
    constructor (props) {
        super(props)
        this.updateSurveyHandler = this.updateSurveyHandler.bind(this);
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired,
    }

    updateSurveyHandler = (payload) => {
        
        if (this.props.surveyHolder.get('title').trim().length <= 0) {
            this.props.updateSurveyFailedToEdit(true); 
            this.props.updateSurveyEditError('THE SURVEY MUST HAVE A TITLE');
            return;
        }

        let questionMissingTitle = this.props.surveyHolder.get('questions').findEntry((question) => 
                (question.get('title').trim().length <= 0)
        )

        if (questionMissingTitle) {
            this.props.updateSurveyFailedToEdit(true); 
            this.props.updateSurveyEditError('EACH QUESTION MUST HAVE A TITLE');
            return;
        }

        let questionMissingType = this.props.surveyHolder.get('questions').findEntry((question) => 
                (question.get('type').trim().length <= 0)
        )

        if (questionMissingType) {
            this.props.updateSurveyFailedToEdit(true); 
            this.props.updateSurveyEditError('EACH QUESTION MUST HAVE A TYPE');
            return;
        }

        this.props.updateSurveyFailedToEdit(false); 
        this.props.updateSurveyEditError('');
        this.props.updateSurvey(this.props.surveyHolder);
    };

    render () {
        return (
            <Modal open={this.props.openEditModal} size="small"dimmer={false}> 
                <Modal.Header> Edit Survey </Modal.Header>
                <Modal.Content>

                    {/* this trigger the button inside the form however the button is hidden in css */}
                    <SurveyInfoForm
                            name={this.props.name}
                            surveyId={this.props.surveyId}
                            surveyHolder={this.props.surveyHolder}
                            surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex}
                            updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                            updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                            updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                            updateSurveyHolderQuestionCreate={this.props.updateSurveyHolderQuestionCreate}
                            updateSurveyHolderQuestionDelete={this.props.updateSurveyHolderQuestionDelete}
                            updateSurveyHolderQuestionSetType={this.props.updateSurveyHolderQuestionSetType}
                            updateSurveyHolderQuestionSetTitle={this.props.updateSurveyHolderQuestionSetTitle}
                            updateSurveyHolderQuestionSetTooltip={this.props.updateSurveyHolderQuestionSetTooltip}
                            updateSurveyHolderQuestionSetFilter={this.props.updateSurveyHolderQuestionSetFilter}
                            updateSurveyHolderQuestionToggleFilter={this.props.updateSurveyHolderQuestionToggleFilter}
                            updateSurveyHolderQuestionToggleFilterMode={this.props.updateSurveyHolderQuestionToggleFilterMode}
                            updateSurveyHolderQuestionSetAnswersMaximum={this.props.updateSurveyHolderQuestionSetAnswersMaximum}
                            updateSurveyHolderQuestionSetAnswersMinimum={this.props.updateSurveyHolderQuestionSetAnswersMinimum}
                            updateSurveyHolderQuestionToggleAnswersMaximum={this.props.updateSurveyHolderQuestionToggleAnswersMaximum}
                            updateSurveyHolderQuestionToggleAnswersMinimum={this.props.updateSurveyHolderQuestionToggleAnswersMinimum}
                            updateSurveyHolderQuestionIndex={this.props.updateSurveyHolderQuestionIndex}


                    />
                    <Message negative floating hidden={!this.props.failedToEdit}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.editError}</Message.Header>
                    </Message>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative 
                        disabled={this.props.Editing}
                        onClick={ this.props.onClose }
                    >
                        Cancel
                    </Button>
                    <Button positive
                        disabled={this.props.isEditing}
                        loading={this.props.isEditing}
                        content='Save Changes'
                        onClick={ this.updateSurveyHandler}
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}
