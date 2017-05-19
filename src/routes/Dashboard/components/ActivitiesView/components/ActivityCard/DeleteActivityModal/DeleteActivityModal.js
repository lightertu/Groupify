/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal} from "semantic-ui-react";

export default class DeleteActivityModal extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        activityId: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };

    makeDeleteHandler (activityId)  {
        let close = this.props.onClose;
        return function() {
            close();
            //TODO: fire an action to delete an activity
        }
    };

    render() {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={"blurring"}>
                <Modal.Header> Delete Activity {this.props.name } </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to activity {this.props.name} </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={ this.props.onClose }>
                        Cancel
                    </Button>
                    <Button negative icon='checkmark'
                            labelPosition='right'
                            content='Delete'
                            onClick={ this.makeDeleteHandler(this.props.activityId) }/>
                </Modal.Actions>
            </Modal>
        );
    }
}
