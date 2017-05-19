/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'semantic-ui-react'
import ActivityInfoForm from "../../ActivityInfoForm"

export default class EditActivityInfoModal extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        activityId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        totalCapacity: PropTypes.number.isRequired,
        groupCapacity: PropTypes.number.isRequired,
    }

    /* using error function to bind this */
    saveChangeButtonHandler = (e) => {
        /* the only thing this handler does it that it trigger the form to submit */
        this.activityFormButton.click()
        const close = this.props.onClose;
        close();
    };

    updateActivity = (payload) => {
        //TODO: implement submit form
        console.log(payload);
    };

    render () {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={'blurring'}>
                <Modal.Header> Edit Activity {this.props.name } </Modal.Header>
                <Modal.Content>

                    {/* this trigger the button inside the form however the button is hidden in css */}
                    <ActivityInfoForm submitButtonRef = { (button) => { this.activityFormButton = button } }
                                      activityId={this.props.activityId}
                                      name={this.props.name}
                                      endDate={this.props.endDate}
                                      groupCapacity={this.props.groupCapacity}
                                      totalCapacity={this.props.totalCapacity}
                                      submitForm={this.updateActivity}/>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={ this.props.onClose }
                            >
                            Cancel
                    </Button>
                    <Button positive
                            content='Save Changes'
                            onClick={ this.saveChangeButtonHandler }
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}
