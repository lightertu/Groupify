/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'semantic-ui-react'
import SurveyInfoForm from "../../SurveyInfoForm"

export default class EditSurveyInfoModal extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        surveyId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }

    /* using error function to bind this */
    saveChangeButtonHandler = (e) => {
        /* the only thing this handler does it that it trigger the form to submit */
        this.surveyFormButton.click()
        const close = this.props.onClose;
        close();
    };

    updateSurvey = (payload) => {
        //TODO: implement submit form
        console.log(payload);
    };

    render () {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={'blurring'}>

                <Modal.Header> Edit Survey {this.props.name } </Modal.Header>
                <Modal.Content>

                    {/* this trigger the button inside the form however the button is hidden in css */}
                    <SurveyInfoForm submitButtonRef = { (button) => { this.surveyFormButton = button } }
                                      surveyId={this.props.surveyId}
                                      name={this.props.name}
                                      submitForm={this.updateSurvey}/>
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
