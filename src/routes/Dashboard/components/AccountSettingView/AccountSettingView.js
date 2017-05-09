/**
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Form, Menu, Header, Icon, Modal, Segment} from "semantic-ui-react";

export default class AccountSettingView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Segment style={{height: "89vh", padding: "2rem" }}>
                <div style={{ textAlign: "center" }}>
                    <Header as='h2' >
                        Account Settings
                    </Header>
                </div>
                <Form style= {{paddingTop: "2rem"}}>
                    <Form.Input label='Email' placeholder='example@email.com' />
                    <Form.Input label='Name' placeholder='Name' />
                    <Form.Input label='Current Password' placeholder='current password' />
                    <Form.Input label='New Password' placeholder='new password' />
                    <Form.Input label='Repeat New Password' placeholder='repeat new password' />
                    <Form.Button>Update</Form.Button>
                </Form>
            </Segment>
        );
    }
}
