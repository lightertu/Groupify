/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal, Message} from "semantic-ui-react";

export default class DeleteSurveyModal extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSurveyHandler = this.deleteSurveyHandler.bind(this);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        surveyId: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };
    
    deleteSurveyHandler(payload) {
        this.props.deleteSurvey(this.props.surveyHolder.get('surveyId'));
    }

    render() {
        return (
            <Modal open={this.props.openDeleteModal} size="small" dimmer={"blurring"}>
                <Modal.Header> Delete Survey </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete [{this.props.surveyHolder.get('title')}]</p>
                    <Message negative floating hidden={!this.props.failedToDelete}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.deleteError}</Message.Header>
                    </Message>
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
                        onClick={this.deleteSurveyHandler}/>
                </Modal.Actions>
            </Modal>
        );
    }
}
