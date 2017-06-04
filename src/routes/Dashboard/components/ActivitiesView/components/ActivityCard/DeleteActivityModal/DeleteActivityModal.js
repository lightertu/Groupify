/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal, Message} from "semantic-ui-react";

export default class DeleteActivityModal extends React.Component {
    constructor(props) {
        super(props);
        this.deleteActivityHandler = this.deleteActivityHandler.bind(this);
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired
    };

    deleteActivityHandler(payload) {
        this.props.deleteActivity(this.props.activityHolder.get('activityId'));
    }

    render() {
        return (
            <Modal open={this.props.openDeleteModal} size="small" dimmer={"blurring"}>
                <Modal.Header> Delete Activity </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete [{this.props.activityHolder.get('title')}] </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive disabled={this.props.isDeleting}
                    onClick={ this.props.onClose }>
                        Cancel
                    </Button>
                    <Button negative disabled={this.props.isDeleting}
                        loading={this.props.isDeleting}
                        icon='checkmark'
                        labelPosition='right'
                        content='Delete'
                        onClick={this.deleteActivityHandler}/>
                    <Message negative floating hidden={!this.props.failedToDelete}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.deleteError}</Message.Header>
                    </Message>
                </Modal.Actions>
            </Modal>
        );
    }
}
