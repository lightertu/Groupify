import React, { Component } from 'react'
import {Input,  Button, Form, Header, Card , Menu, Segment} from 'semantic-ui-react'
import axios from 'axios';
import AuthAlert from './AuthAlert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', password2: '', login: true, activeItem: 'Login'};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemClick= this.handleItemClick.bind(this);
        this.login = this.login.bind(this);
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleInputChange(field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }

    login(e) {
        e.preventDefault();
        this.props.fetchUser(this.state.email, this.state.password);
        this.setState({email: '', password: ''});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.generateUser(this.state.email, this.state.password);
        this.setState({email: '', password: '', password2: ''});
    }

    render() {
        // response is the response from the server,
        // state is the state of user generation
        const { response, state, loginState, login, auth, user } = this.props 

        const cardStyle = {
            marginTop:'200px',
            padding: 0,
            zIndex: 3
        }


        const buttonStyle = {
            marginTop: 30,
            width: '100%',
            marginBottom: 40
        }

        const { activeItem } = this.state

        let loading = (<Button color={'green'}>Sign Up</Button>);
        if(state == "generating user") {
            loading = (<Button loading color={'green'}>Sign Up</Button>);
        }
        console.log(auth, user)
        return (
            <div style={{textAlign:'center'}}>
                <Card centered style={cardStyle}>
                        <Menu tabular attached='top' widths={2}>
                            <Menu.Item name='Login' active={activeItem === 'Login'}  style={{borderBottom:0}} onClick={this.handleItemClick} />
                            <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} style={{borderBottom:0}} onClick={this.handleItemClick} />
                        </Menu>
                    {(activeItem === 'Login') ? (
                        <Card.Content  style={{boxSizing:'border-box', borderBottom:'1px solid #ccc', borderRight:'1px solid #fff', borderLeft:'1px solid #ccc', borderTop:'0px solid #ccc', borderRadius:'2px'}} >
                            <Form onSubmit={this.login}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input type="text" value={this.state.email} onChange={this.handleInputChange.bind(this, 'email')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Passoword</label>
                                    <input type="password" value={this.state.password} onChange={this.handleInputChange.bind(this, 'password')}/>
                                </Form.Field>
                                <AuthAlert failure={login.success} message={login.message}/>
                                <Button color={'green'}>Login</Button>
                            </Form>
                        </Card.Content>
                    ) : (
                        <Card.Content style={{boxSizing:'border-box', borderBottom:'1px solid #ccc', borderLeft:'1px solid #fff', borderRight:'1px solid #ccc', borderTop:'0px solid #ccc', borderRadius:'2px'}}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input type="text" value={this.state.email} onChange={this.handleInputChange.bind(this, 'email')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Passoword</label>
                                    <input type="password" value={this.state.password} onChange={this.handleInputChange.bind(this, 'password')}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Confirm Password</label>
                                    <input type="password" value={this.state.password2} onChange={this.handleInputChange.bind(this, 'password2')}/>
                                </Form.Field>
                                <AuthAlert failure={response.success} message={response.message}/>
                                {loading}
                            </Form>
                        </Card.Content>
                    )}
                </Card>
            </div>
        )
    }
}

export default Login
