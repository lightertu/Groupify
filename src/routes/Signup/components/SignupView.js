import React, { Component, PropTypes } from 'react'
import { Button, Grid, Header, Icon, Image, Label, Message, Segment } from 'semantic-ui-react'
import { Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select, } from 'formsy-semantic-ui-react'

class SignupView extends Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        signup: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        hideErrorMessage: PropTypes.func.isRequired,
        signingUp: PropTypes.bool.isRequired,
        signupSuccess: PropTypes.bool.isRequired,
        signupFailure: PropTypes.bool.isRequired
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            replace(redirect)
        }
    }

    handleOnValidSubmit = (formData) => {
        const {email, password} = formData
        const {signup} = this.props
        signup(email, password)
    }

    redirectToLogin = () => {
        this.props.push('/login')
    }

    render () {
        const {hideErrorMessage, signingUp, signupFailure, signupSuccess} = this.props
        return (
            <Grid centered columns={3}>
                <Grid.Column >
                    <Header as='h2' color='teal' style={{marginTop: '30%'}}>
                        Signup
                    </Header>
                    {  signupFailure && <Message negative onDismiss={hideErrorMessage}> Duplicate Email </Message>}
                    {  signupSuccess &&
                       <Message positive>
                           <Message.Header>Signup Success</Message.Header>
                           <p>Redirect to <b>Login</b> in 3 Seconds ...</p>
                       </Message>
                    }

                    <Segment>
                        <Form size="large"
                              onValidSubmit={this.handleOnValidSubmit}>
                            <Form.Input icon='user' iconPosition='left' placeholder='E-mail address'
                                        name='email'
                                        instantValidation
                                        validations="isEmail"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            isEmail: 'This has to be your email',
                                            isDefaultRequiredValue: 'required',
                                        }}
                            />
                            <Form.Input icon='lock' iconPosition='left' placeholder='Password' type="password"
                                        name="password"
                                        instantValidation
                                        validations="minLength:6"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            minLength: 'at least 6 characters',
                                            equalsField: 'Passwords do not match',
                                            isDefaultRequiredValue: 'required',
                                        }}
                            />

                            <Form.Input icon='lock' iconPosition='left' placeholder='Confirm' type="password"
                                        name="password_confirm"
                                        validations="equalsField:password"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            equalsField: 'Passwords do not match',
                                            isDefaultRequiredValue: 'required',
                                        }}

                            />

                            <Button fluid color="teal" loading={signingUp} size="large">SIGNUP</Button>
                        </Form>
                    </Segment>
                    <Message>
                        Already have an account? <a style={{cursor: 'pointer'}} onClick={this.redirectToLogin}>Log
                        in</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }

}

export default SignupView