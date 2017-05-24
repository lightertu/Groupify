/**
 * Created by Matt on 5/23/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment } from 'semantic-ui-react'

export default class SurveyInfoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: props.name,
        }
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        submitButtonRef: PropTypes.func.isRequired,
        submitForm: PropTypes.func.isRequired
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    handleSubmit  = (event) => {
        event.preventDefault()
        // TODO: fire an action to update the store in the mean time put the thing in side of
        this.props.submitForm(this.state);
    }

    render () {
        return (
            <Form onSubmit={ this.handleSubmit}>
            {console.log(this.props)}
                <Form.Group widths='equal'>

                    <Form.Input label='Survey Name'
                                name="name"
                                placeholder='eg. Hair Color Survey'
                                value={this.state.name}
                                onChange={this.handleChange}
                    />
                <button style={{display: 'none'}} type='submit' ref={this.props.submitButtonRef}>Submit</button>
                </Form.Group>
          </Form>
        )
    }
}
