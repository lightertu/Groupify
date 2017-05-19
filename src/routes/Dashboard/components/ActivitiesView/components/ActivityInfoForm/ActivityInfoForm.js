/**
 * Created by rui on 5/5/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment } from 'semantic-ui-react'

export default class ActivityInfoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: props.name,
            endDate: props.endDate,
            groupCapacity: props.groupCapacity,
            totalCapacity: props.totalCapacity,
        }
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        totalCapacity: PropTypes.number.isRequired,
        groupCapacity: PropTypes.number.isRequired,
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
                <Form.Group widths='equal'>

                    <Form.Input label='Activity Name'
                                name="name"
                                placeholder='eg. CIS 422'
                                value={this.state.name}
                                onChange={this.handleChange}
                    />

                    <Form.Input label='Activity End Date'
                                name="endDate"
                                placeholder='Pick a Date'
                                value={this.state.endDate}
                                onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>

                    <Form.Input label='Group Capacity'
                                name="groupCapacity"
                                placeholder='eg. 3'
                                value={this.state.groupCapacity}
                                onChange={this.handleChange}
                    />

                    <Form.Input label='Total Capacity'
                                name="totalCapacity"
                                placeholder='eg. 30'
                                value={this.state.totalCapacity}
                                onChange={this.handleChange}
                    />
                </Form.Group>
                <button style={{display: 'none'}} type='submit' ref={this.props.submitButtonRef}>Submit</button>
            </Form>
        )
    }
}
