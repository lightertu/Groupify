/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Modal} from "semantic-ui-react";

export default class DeleteSurveyModal extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        surveyId: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    };

    makeDeleteHandler (surveyId)  {
        let close = this.props.onClose;
        return function() {
            close();
            //TODO: fire an action to delete an survey
        }
    };

    render() {
        return (
            <Modal open={this.props.open} onClose={ this.props.onClose } size="small" dimmer={"blurring"}>
                <Modal.Header> Delete Survey {this.props.name } </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to survey {this.props.name} </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={ this.props.onClose }>
                        Cancel
                    </Button>
                    <Button negative icon='checkmark'
                            labelPosition='right'
                            content='Delete'
                            onClick={ this.makeDeleteHandler(this.props.surveyId) }/>
                </Modal.Actions>
            </Modal>
        );
    }
}
