/**
 * Created by rui on 5/5/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment } from 'semantic-ui-react'

export default class ActivityInfoForm extends React.Component {
    constructor (props) {
        super(props)
    }

    handleSubmit  = (event) => {
        event.preventDefault()
    }

    render () {
        return (
            <Form onSubmit={ this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input label='Activity Name' placeholder='eg. CIS 422' 
                        onBlur={(e) => this.props.updateActivityHolderSetTitle(e.target.value)}
                        defaultValue={this.props.activityHolder.get('title')}/>
                    <Form.Input label='Activity End Date' placeholder='Pick a Date'
                        type='date' max='3000-12-31'
                        onChange={(e) => this.props.updateActivityHolderSetEndDate(e.target.value)}
                        onBlur={(e) => this.props.updateActivityHolderSetEndDate(e.target.value)}
                        value={this.props.activityHolder.get('endDate').substring(0,10)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Group Capacity' placeholder='eg. 3'
                        type='number' min='0' step='1'
                        onBlur={(e) => this.props.updateActivityHolderSetGroupCapacity(parseInt(e.target.value))}
                        defaultValue={this.props.activityHolder.get('groupCapacity')}/>
                    <Form.Input label='Total Capacity' placeholder='eg. 30'
                        type='number' min='0' step='1'
                        onBlur={(e) => this.props.updateActivityHolderSetTotalCapacity(parseInt(e.target.value))}
                        defaultValue={this.props.activityHolder.get('totalCapacity')}/>
                </Form.Group>
            </Form>
        )
    }
}
