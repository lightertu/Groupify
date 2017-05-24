/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal} from "semantic-ui-react";
import SurveyInfoForm from '../../SurveyInfoForm'

export default class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    };

    createSurveyHandler = (e) => {
        /* the only thing this handler does it that it trigger the form to submit */
        this.surveyFormButton.click()
        const close = this.props.onClose;
        close();
    };

    createSurvey = (payload) => {
        //TODO: implement this and update store
        console.log(payload);
    }

    render() {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={'blurring'}>
                <Modal.Header> Create Survey </Modal.Header>
                <Modal.Content>

                    {/* this trigger the button inside the form however the button is hidden in css */}
                    <SurveyInfoForm submitButtonRef = { (button) => { this.surveyFormButton = button } }
                                      surveyId={this.props.surveyId}
                                      name={''}
                                      submitForm={ this.createSurvey }/>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={ this.props.onClose }
                    >
                        Cancel
                    </Button>
                    <Button positive
                            content='Create'
                            onClick={ this.createSurveyHandler }
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}
