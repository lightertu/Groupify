/**
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Header, Segment} from 'semantic-ui-react'

export default class AccountSettingView extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        accountSettingsViewData: PropTypes.object.isRequired
    }

    render () {
        return (
            <Segment style={{padding: '2rem'}}>
                <div style={{textAlign: 'center'}}>
                    <Header as='h2'>
                        Account Settings
                    </Header>
                </div>
                <Form style={{paddingTop: '2rem'}}>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='example@email.com' value={ this.props.accountSettingsViewData.email }/>
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' value={ this.props.accountSettingsViewData.name }/>
                    </Form.Field>


                    <hr style={{background: "#cfc8c8", border:0, height:"1px", marginBottom:"20px", marginTop:"30px"}} />

                    <Form.Field>
                        <label>Current Password</label>
                        <input placeholder='Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>New Password</label>
                        <input placeholder='Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>repeat new password</label>
                        <input placeholder='Name'/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        )
    }
}
