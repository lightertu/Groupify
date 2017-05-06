/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Header, Icon, Modal, Segment} from "semantic-ui-react";

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
                    <p>Needs to be Implemented {this.props.name} </p>
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
