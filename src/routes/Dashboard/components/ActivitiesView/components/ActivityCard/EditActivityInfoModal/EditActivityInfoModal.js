/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Modal, Message } from 'semantic-ui-react'
import ActivityInfoForm from "../../ActivityInfoForm"

export default class EditActivityInfoModal extends React.Component {
    constructor (props) {
        super(props)
        this.updateActivityHandler = this.updateActivityHandler.bind(this);
    }

    updateActivityHandler = (e) => {
        if (this.props.activityHolder.get('title').trim().length <= 0) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('THE ACTIVITY MUST HAVE A TITLE');
            return;
        }

        if (!Date.parse(this.props.activityHolder.get('endDate'))) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('THE ACTIVITY MUST HAVE A VALID END DATE');
            return;
        }

        if (this.props.activityHolder.get('groupCapacity') <= 0) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('GROUP CAPACITY MUST BE AT LEAST ONE PERSON');
            return;
        }


        if (this.props.activityHolder.get('totalCapacity') <= 0) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('TOTAL CAPACITY MUST BE AT LEAST ONE PERSON');
            return;
        }

        if (this.props.activityHolder.get('groupCapacity') > 
                this.props.activityHolder.get('totalCapacity')) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('GROUP CAPACITY MUST NOT BE BIGGER THAN TOTAL CAPACITY');
            return;
        }

        if (this.props.activityHolder.get('currentCapacity') >= 
                this.props.activityHolder.get('totalCapacity')) {
            this.props.updateActivityFailedToEdit(true); 
            this.props.updateActivityEditError('TOTAL CAPACITY MUST NOT BE BIGGER THAN CURRENT CAPACITY');
            return;
        }

        this.props.updateActivityFailedToEdit(false); 
        this.props.updateActivityEditError('');
        this.props.updateActivity(this.props.activityHolder);
    };

    render () {
        return (
            <Modal open={this.props.openEditModal} size="small" dimmer={'blurring'}>
                <Modal.Header> Edit Activity </Modal.Header>
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
                    <Message negative floating hidden={!this.props.failedToEdit}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.editError}</Message.Header>
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
                            disabled={this.props.isLoading}
                            loading={this.props.isLoading}
                            content='Save Changes'
                            onClick={ this.updateActivityHandler }
                        />
                </Modal.Actions>
            </Modal>
        )
    }
}
