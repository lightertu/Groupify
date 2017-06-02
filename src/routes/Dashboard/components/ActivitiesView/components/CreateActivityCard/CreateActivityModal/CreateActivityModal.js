/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal, Message} from "semantic-ui-react";
import ActivityInfoForm from '../../ActivityInfoForm'

export default class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired
    };

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
        return (
            <Modal open={this.props.openCreateModal} onUnmount={this.props.fetchActivityList}
                onClose={ this.props.onClose } size="small" dimmer={'blurring'}>
                <Modal.Header> Create Activity </Modal.Header>
                <Modal.Content>
                    <Message negative floating hidden={!this.props.failedToCreate}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.createError}</Message.Header>
                    </Message>
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
                        onClick={this.createActivityHandler}
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}
