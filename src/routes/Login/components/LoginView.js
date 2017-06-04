import React, { Component, PropTypes } from 'react'

import { Button, Form, Grid, Header, Image, Input, Message, Segment } from 'semantic-ui-react'

class LoginView extends Component {
    constructor (props) {
        super(props)
        this.state = {email: '', password: ''}
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            console.log(redirect);
            replace(redirect)
        }
    }

    componentWillReceiveProps (nextProps) {
        const {isAuthenticated, replace, redirect} = nextProps
        const {isAuthenticated: wasAuthenticated} = this.props

        if (!wasAuthenticated && isAuthenticated) {
            console.log("logged in");
            replace(redirect)
        }
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    handleSubmit = e => {
        const {email, password} = this.state
        const {login} = this.props
        e.preventDefault()
        login(email, password)
    }

    render () {
        return (
            <Grid centered verticalAlign="middle" columns={3}>
                <Grid.Column textAlign="center">
                    <Segment>
                        <Form size="large" onSubmit={this.handleSubmit}>
                            <Header as='h2' color='teal'>
                                Log-in
                            </Header>
                            <Form.Field>
                                <Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                                       name='email' value={this.state.email} onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input fluid icon='lock' iconPosition='left' placeholder='Password' type="password"
                                       name="password" value={this.state.password} onChange={this.handleChange}/>
                            </Form.Field>
                            <Button fluid color="teal" size="large">LOGIN</Button>
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