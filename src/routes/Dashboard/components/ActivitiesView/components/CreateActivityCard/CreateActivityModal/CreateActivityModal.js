/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal, Message, Dropdown, Divider, Segment} from "semantic-ui-react";
import ActivityInfoForm from '../../ActivityInfoForm'
import SurveyInfoForm from '../../../../SurveysView/components/SurveyInfoForm'

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.inActivitiesView=true;
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired
    };

    componentWillMount () {
        this.props.fetchSurveyList();
        this.props.updateSurveyHolderGetSurvey(null);
    }

    createSurveyHandler = (e) => {
        
        if (this.props.surveyHolder.get('title').trim().length <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('THE SURVEY MUST HAVE A TITLE');
            return;
        }

        let questionMissingTitle = this.props.surveyHolder.get('questions').findEntry((question) => 
                (question.get('title').trim().length <= 0)
        )

        if (questionMissingTitle) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('EACH QUESTION MUST HAVE A TITLE');
            return;
        }

        let questionMissingType = this.props.surveyHolder.get('questions').findEntry((question) => 
                (question.get('type').trim().length <= 0)
        )

        if (questionMissingType) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('EACH QUESTION MUST HAVE A TYPE');
            return;
        }

        this.props.updateActivityFailedToCreate(false); 
        this.props.updateActivityCreateError('');
        this.props.createSurveyFromActivity(this.props.surveyHolder);
    }

    nextStageHandler = (e) => {
        
        if (this.props.activityHolder.get('title').trim().length <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('THE ACTIVITY MUST HAVE A TITLE');
            return;
        }

        if (!Date.parse(this.props.activityHolder.get('endDate'))) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('THE ACTIVITY MUST HAVE A VALID END DATE');
            return;
        }

        if (this.props.activityHolder.get('groupCapacity') <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('GROUP CAPACITY MUST BE AT LEAST ONE PERSON');
            return;
        }


        if (this.props.activityHolder.get('totalCapacity') <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('TOTAL CAPACITY MUST BE AT LEAST ONE PERSON');
            return;
        }

        if (this.props.activityHolder.get('groupCapacity') > 
                this.props.activityHolder.get('totalCapacity')) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('GROUP CAPACITY MUST NOT BE BIGGER THAN TOTAL CAPACITY');
            return;
        }


        this.props.updateActivityFailedToCreate(false); 
        this.props.updateActivityCreateError('');
        this.props.updateActivityViewSelectingSurvey(true);
    }

    createActivityHandler = (e) => {
        
        if (this.props.activityHolder.get('title').trim().length <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('THE ACTIVITY MUST HAVE A TITLE');
            return;
        }

        if (!Date.parse(this.props.activityHolder.get('endDate'))) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('THE ACTIVITY MUST HAVE A VALID END DATE');
            return;
        }

        if (this.props.activityHolder.get('groupCapacity') <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('GROUP CAPACITY MUST BE AT LEAST ONE PERSON');
            return;
        }


        if (this.props.activityHolder.get('totalCapacity') <= 0) {
            this.props.updateActivityFailedToCreate(true); 
            this.props.updateActivityCreateError('TOTAL CAPACITY MUST BE AT LEAST ONE PERSON');
            return;
        }

        if (this.props.activityHolder.get('groupCapacity') > 
                this.props.activityHolder.get('totalCapacity')) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('GROUP CAPACITY MUST NOT BE BIGGER THAN TOTAL CAPACITY');
            return;
        }


        this.props.updateActivityFailedToCreate(false); 
        this.props.updateActivityCreateError('');
        this.props.createActivity(this.props.activityHolder);
    };

    render() {
        let surveyMenuOptions = [];
        surveyMenuOptions.push({
            key:'New_Survey',
            value:null,
            text:'New Survey',
        });
        (
            this.props.surveys
        && 
            this.props.surveys.forEach((survey) => {
                surveyMenuOptions.push({
                    key:survey.get('surveyId'),
                    value:survey.get('surveyId'),
                    text:survey.get('title'),
                });
            })
        );
        return (
            <Modal open={this.props.openCreateModal} 
                onClose={ this.props.onClose } size="small" dimmer={false}>
                <Modal.Header> Create Activity </Modal.Header>
                <Modal.Content>
                    <ActivityInfoForm 
                        activityHolder={this.props.activityHolder} 
                        updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                        updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                        updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                        updateActivityHolderSetTotalCapacity={this.props.updateActivityHolderSetTotalCapacity}
                        updateActivityHolderSetGroupCapacity={this.props.updateActivityHolderSetGroupCapacity}
                        updateActivityHolderSetCurrentCapacity={this.props.updateActivityHolderSetCurrentCapacity}
                        updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                    />
                    {
                        (
                            this.props.selectingSurvey 
                        )
                        ?
                            <Segment basic>
                                <Divider horizontal > Select Survey </Divider>
                                <Dropdown style={{marginBottom:10}} fluid selection
                                    options={surveyMenuOptions} scrolling
                                    placeholder='New Survey'
                                    value={this.props.surveyHolder.get('surveyId')}
                                    onChange={(e, data) => {
                                        this.props.updateSurveyHolderGetSurvey(data.value);
                                    }}
                                />

                                <Divider horizontal> 
                                    {this.props.creatingSurvey ? 'New Survey' : 'Preview'}
                                </Divider>
                                <SurveyInfoForm
                                    name={this.props.name}
                                    surveyId={this.props.surveyId}
                                    surveyHolder={this.props.surveyHolder}
                                    surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex}
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
                                    updateSurveyHolderQuestionIndex={
                                        this.props.updateSurveyHolderQuestionIndex}
                                    inActivitiesView = {this.inActivitiesView} 
                                    creatingSurvey={this.props.creatingSurvey} 
                                    selectingSurvey={this.props.selectingSurvey} 
                                />
                            </Segment>
                        :
                            null
                    }
                    <Message negative floating hidden={!this.props.failedToCreate}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.createError}</Message.Header>
                    </Message>
                </Modal.Content>
                {
                    (
                        this.props.selectingSurvey 
                    )
                    ?
                        (
                            this.props.creatingSurvey
                        )
                        ?
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
                                    content='Create Survey'
                                    onClick={this.createSurveyHandler}
                                />
                            </Modal.Actions>                                 
                        :
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
                                    content='Create Activity'
                                    onClick={this.createActivityHandler}
                                />
                            </Modal.Actions>                       
                    :
                        <Modal.Actions>
                            <Button negative 
                            disabled={this.props.isCreating}
                            onClick={ this.props.onClose }
                            >
                                Cancel
                            </Button>
                            <Button positive
                                content='Select Survey'
                                onClick={this.nextStageHandler}
                            />
                        </Modal.Actions>
                }
            </Modal>
        );
    }
}
