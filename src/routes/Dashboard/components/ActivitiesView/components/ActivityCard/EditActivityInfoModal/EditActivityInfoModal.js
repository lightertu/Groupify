/**
 * Created by rui on 5/5/17.
 */
import React from 'react'

import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'semantic-ui-react'

export default class EditActivityInfoModal extends React.Component {
    constructor (props) {
        super(props)
        this.makeActivityInfoUpdateHandler = this.makeActivityInfoUpdateHandler.bind(this);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        activityId: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    }

    activityInfoUpdateHandler () {
        // the only thing this handler does it that it trigger the form to submit
        this.activityFormButton.click()
    };

    handleSubmit (event) {
        console.log('form is submitted')
        event.preventDefault()
    }

    render () {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={'blurring'}>
                <Modal.Header> Edit Activity {this.props.name } </Modal.Header>
                <Modal.Content>

                    {/* this form has to stay here for a while, it cannot be separated out from this file yet */}
                    <Form onSubmit={ this.handleSubmit} >
                        <Form.Group widths='equal'>
                            <Form.Input label='Activity Name' placeholder='eg. CIS 422'/>
                            <Form.Input label='Activity End Date' placeholder='Pick a Date'/>
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input label='Total Capacity' placeholder='eg. 30'/>
                            <Form.Input label='Team Capacity' placeholder='eg. 3'/>
                        </Form.Group>
                        <button style={{display: "none"}} type='submit' ref={ (button) => { this.activityFormButton = button } } >Submit</button>
                    </Form>

                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={ this.props.onClose }
                            >
                            Cancel
                    </Button>
                    <Button positive
                            content='Submit'
                            onClick={ this.activityInfoUpdateHandler }
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}
