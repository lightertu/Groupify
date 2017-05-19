/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal} from "semantic-ui-react";
import ActivityInfoForm from "./ActivityInfoForm";

export default class EditActivityInfoModal extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        activityId: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };

    makeActivityInfoUpdateHandler (activityId)  {
        let close = this.props.onClose;
        return function() {
            close();
            //TODO: fire an action to delete an activity
        }
    };

    render() {
        return (
    <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={"blurring"}>
        <Modal.Header> Edit Activity {this.props.name } </Modal.Header>
        <Modal.Content>
            <ActivityInfoForm/>

        </Modal.Content>
        <Modal.Actions>
            <Button negative onClick={ this.props.onClose }>
                Cancel
            </Button>
            <Button positive
                    content='Submit'
                    onClick={ this.makeActivityInfoUpdateHandler(this.props.activityId) }/>
        </Modal.Actions>
    </Modal>
        );
    }
}
