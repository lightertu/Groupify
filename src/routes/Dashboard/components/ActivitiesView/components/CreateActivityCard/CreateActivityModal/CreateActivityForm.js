/**
 * Created by rui on 5/5/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment } from 'semantic-ui-react'

export default class EditActivityForm extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        totalCapacity: PropTypes.number.isRequired,
        groupCapacity: PropTypes.number.isRequired,
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
                    <Form.Input label='Activity Name' placeholder='eg. CIS 422' value={this.props.name}/>
                    <Form.Input label='Activity End Date' placeholder='Pick a Date' value={this.props.endDate}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Group Capacity' placeholder='eg. 3' value={this.props.groupCapacity}/>
                    <Form.Input label='Total Capacity' placeholder='eg. 30' value={this.props.totalCapacity}/>
                </Form.Group>
                <button style={{display: 'none'}} type='submit' ref={this.props.submitButtonRef}>Submit</button>
            </Form>
        )
    }
}
