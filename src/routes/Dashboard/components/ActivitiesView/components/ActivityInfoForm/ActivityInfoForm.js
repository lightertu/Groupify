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

    render () {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input label='Activity Name' placeholder='eg. CIS 422' 
                        onChange={(e) => this.props.updateActivityHolderSetTitle(e.target.value)}
                        value={this.props.activityHolder.get('title')}/>
                    <Form.Input label='Activity End Date' placeholder='Pick a Date'
                        onChange={(e) => this.props.updateActivityHolderSetEndDate(e.target.value)}
                        value={this.props.activityHolder.get('endDate')}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Group Capacity' placeholder='eg. 3'
                        type='number' min='0' step='1'
                        onChange={(e) => this.props.updateActivityHolderSetGroupCapacity(e.target.value)}
                        value={this.props.activityHolder.get('groupCapacity')}/>
                    <Form.Input label='Total Capacity' placeholder='eg. 30'
                        type='number' min='0' step='1'
                        onChange={(e) => this.props.updateActivityHolderSetTotalCapacity(e.target.value)}
                        value={this.props.activityHolder.get('totalCapacity')}/>
                </Form.Group>
            </Form>
        )
    }
}
