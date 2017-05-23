/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal} from "semantic-ui-react";
import ActivityInfoForm from '../../ActivityInfoForm'

export default class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    };

    createActivityButtonHandler = (e) => {
        /* the only thing this handler does it that it trigger the form to submit */
        this.activityFormButton.click()
        const close = this.props.onClose;
        close();
    };

    createActivityHandler = (payload) => {
        //TODO: implement this and update store
        // right now payload store all the information in the form
        console.log(payload);
    }

    render() {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={'blurring'}>
                <Modal.Header> Create Activity </Modal.Header>
                <Modal.Content>

                    {/* this trigger the button inside the form however the button is hidden in css */}
                    <ActivityInfoForm submitButtonRef = { (button) => { this.activityFormButton = button } }
                                      activityId={null}
                                      name={null}
                                      endDate={null}
                                      groupCapacity={null}
                                      totalCapacity={null}
                                      submitForm={ this.createActivityHandler }/>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={ this.props.onClose }
                    >
                        Cancel
                    </Button>
                    <Button positive
                            content='Create'
                            onClick={ this.createActivityButtonHandler }
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}
