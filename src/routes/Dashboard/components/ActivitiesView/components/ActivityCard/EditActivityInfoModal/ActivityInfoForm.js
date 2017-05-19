/**
 * Created by rui on 5/5/17.
 */

import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Form, Header, Icon, Modal, Segment} from "semantic-ui-react";

export default class DeleteActivityModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
    <Form>
        <Form.Group widths='equal'>
            <Form.Input label='Activity Name' placeholder='eg. CIS 422' />
            <Form.Input label='Activity End Date' placeholder='Pick a Date' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input label='Total Capacity' placeholder='eg. 30' />
            <Form.Input label='Team Capacity' placeholder='eg. 3' />
        </Form.Group>
    </Form>
        )
    }
}
