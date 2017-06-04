import React, { Component, PropTypes } from 'react'

import { Button, Grid, Header, Icon, Image, Label, Message, Segment } from 'semantic-ui-react'

import { Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select, } from 'formsy-semantic-ui-react'

class LoginView extends Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        hideErrorMessage: PropTypes.func.isRequired,
        authenticating: PropTypes.bool.isRequired,
        authenticationFailed: PropTypes.bool.isRequired
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            replace(redirect)
        }
    }

    componentWillReceiveProps (nextProps) {
        const {isAuthenticated, replace, redirect} = nextProps
        const {isAuthenticated: wasAuthenticated} = this.props

        if (!wasAuthenticated && isAuthenticated) {
            replace(redirect)
        }
    }

    handleOnValidSubmit = (formData) => {
        const {email, password} = formData
        const {login} = this.props
        login(email, password)
    }

    render () {
        const {hideErrorMessage, authenticating, authenticationFailed} = this.props
        return (
            <Grid centered verticalAlign="middle" columns={3}>
                <Grid.Column >
                    <Header as='h2' color='teal' style={{marginTop: '30%'}}>
                        Login
                    </Header>
                    {  authenticationFailed && <Message negative onDismiss={hideErrorMessage}> email or password is incorrect </Message>}
                    <Segment>
                        <Form size="large"
                              onValidSubmit={this.handleOnValidSubmit}>
                            <Form.Input icon='user' iconPosition='left' placeholder='E-mail address'
                                        name='email'
                                        validations="isEmail"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            isEmail: 'This has to be your email',
                                            isDefaultRequiredValue: 'required',
                                        }}
                            />
                            <Form.Input icon='lock' iconPosition='left' placeholder='Password' type="password"
                                        name="password" />
                            <Button fluid color="teal" loading={authenticating} size="large">LOGIN</Button>
                        </Form>
                    </Segment>
                    <Message>
                        New to us? <a href="#">Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }

}

export default LoginView