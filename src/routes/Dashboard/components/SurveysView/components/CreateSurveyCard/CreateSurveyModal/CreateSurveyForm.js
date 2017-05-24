/**
 * Created by Matt on 5/23/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment } from 'semantic-ui-react'

export default class EditSurveyForm extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        submitButtonRef: PropTypes.func.isRequired
    }

    handleSubmit (event) {
        alert('form is submitted')
        event.preventDefault()
        //TODO: first and action to handle form submission
    }

    render () {
        return (
            <Form onSubmit={ this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input label='Survey Name' placeholder='eg. CIS 422' value={this.props.name}/>
                </Form.Group>
                <button style={{display: 'none'}} type='submit' ref={this.props.submitButtonRef}>Submit</button>
            </Form>
        )
    }
}
