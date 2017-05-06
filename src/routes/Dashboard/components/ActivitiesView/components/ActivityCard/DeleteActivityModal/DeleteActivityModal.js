/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Header, Icon, Modal, Segment} from "semantic-ui-react";

export default class DeleteActivityModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose }>
                <Modal.Header> Delete Activity </Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Header>Delete</Header>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}
