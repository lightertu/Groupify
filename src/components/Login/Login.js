import React, { Component } from 'react'
import {Input,  Button, Form, Header, Card , Menu, Segment} from 'semantic-ui-react'
import axios from 'axios';
import TextInput from './TextInput';

function ErrorMessage(props) {
    let wrapperStyles = {
        justifyContent: 'center',
        margin: "auto",
        marginBottom: "1em",
        animation: "shake 150ms ease-in-out"
    }

    let paraStyles = {
         backgroundColor: "#FB4F4F",
          color: "white",
          margin: 0,
          padding: "0.5em 1em",
          fontSize: "0.8em",
          fontFamily: 'arial',
          userSelect: "none"
    }

    return (
        <div style={wrapperStyles}>
            <p style={paraStyles}>
                {props.error}
            </p>
        </div>
    )
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '', 
            passwordConfirm: '', 
            login: true, 
            activeItem: 'Login', 
            locks: [true, true, true, true, true]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemClick= this.handleItemClick.bind(this);
        this.login = this.login.bind(this);
        this._changeEmail = this._changeEmail.bind(this);
        this._changePassword = this._changePassword.bind(this);
        this._changePasswordConfirm = this._changePasswordConfirm.bind(this);
        this._errorMessage = this._errorMessage.bind(this);
        this._errorVisible = this._errorVisible.bind(this);
        this.passwordConfirmValidate = this.passwordConfirmValidate.bind(this)
        this._releaseLock = this._releaseLock.bind(this);
        this._setLock = this._setLock.bind(this);
    }

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name, error: false, email: '', password: '', passwordConfirm: '', locks: [true, true, true , true, true]});
        this.props.setErrorMessage("");
        this.props.setErrorDisplay(false);
    }

     _changeEmail(event) {
      this.setState({email: event.target.value});
    }

      _errorMessage(error){
        this.props.setErrorMessage(error);
      }

      _errorVisible(boolean){
        this.props.setErrorDisplay(boolean);
      }

      _releaseLock(value) {
        let locks = this.state.locks;
        locks[value] = false;
        this.setState({locks: locks});
      }

      _setLock(value) {
        let locks = this.state.locks;
        locks[value] = true;
        this.setState({locks: locks});
      }

      _changePassword(event) {
        this.setState({password: event.target.value});
      }

    _changePasswordConfirm(event) {
        this.setState({passwordConfirm: event.target.value});
      }

    login(e) { // handles login
        e.preventDefault();
        if(!this.state.locks[0] && !this.state.locks[1]) {
            this.props.fetchUser(this.state.email, this.state.password);
        }
        this.setState({email: '', password: ''});
       //this.props.setErrorMessage("Both entries must be valid");
        this.props.setErrorDisplay(true);
    }

    handleSubmit(e) { // handles create user
        e.preventDefault();
        if(!this.state.locks[2] && !this.state.locks[3] && !this.state.locks[4]) {
            this.props.generateUser(this.state.email, this.state.password);
        } else {
            this.setState({email: '', password: '', passwordConfirm: ''});
            this.props.setErrorMessage("All entries must be valid");
            this.props.setErrorDisplay(true);
        }   
    }

    validateEmail(value) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }

    commonValidate(value) {
        return true;
    }

    passwordConfirmValidate(value) {
        return value === this.state.password;
    }

    render() {
        // response is the response from the server,
        // state is the state of user generation
        const { response, state, loginState, login, auth, user, errorMessage, errorDisplay } = this.props 

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
        console.log(errorMessage, errorDisplay)
        return (
            <div style={{textAlign:'center'}}>
                <Card centered style={cardStyle} >
                        <Menu tabular attached='top' widths={2}>
                            <Menu.Item name='Login' active={activeItem === 'Login'}  style={{borderBottom:0}} onClick={this.handleItemClick} />
                            <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} style={{borderBottom:0}} onClick={this.handleItemClick} />
                        </Menu>
                    {(activeItem === 'Login') ? (
                        <Card.Content style={{boxSizing:'border-box', borderBottom:'1px solid #ccc', borderRight:'1px solid #fff', borderLeft:'1px solid #ccc', borderTop:'0px solid #ccc', borderRadius:'2px'}} >
                            <Form onSubmit={this.login}>
                                {errorDisplay ? <ErrorMessage error={errorMessage} color={this.props.errorColor}/> : null}
                                <TextInput
                                    label="Email"
                                    uniqueName="email"
                                    text="Email Address"
                                    type="text"
                                    visible={this._errorVisible.bind(this)}
                                    setErrorMessage={this._errorMessage.bind(this)}
                                    required={true}
                                    minCharacters={3}
                                    validate={this.validateEmail.bind(this)}
                                    id="username"
                                    value={this.state.email}
                                    errorMessage="Name is invalid"
                                    emptyMessage="Name is required"
                                    tooShortMessage="That email is too short"
                                    releaseLock={this._releaseLock.bind(this)}
                                    setLock={this._setLock.bind(this)}
                                    lid={0}
                                    onChange={this._changeEmail}/>
                                <TextInput
                                    label="Password"
                                    uniqueName="password"
                                    text="Password"
                                    type="password"
                                    visible={this._errorVisible.bind(this)}
                                    setErrorMessage={this._errorMessage.bind(this)}
                                    required={true}
                                    minCharacters={3}
                                    validate={this.commonValidate.bind(this)}
                                    id="password"
                                    value={this.state.password}
                                    errorMessage="Password is invalid"
                                    emptyMessage="Password is required"
                                    tooShortMessage="That password is too short"
                                    releaseLock={this._releaseLock.bind(this)}
                                    setLock={this._setLock.bind(this)}
                                    lid={1}
                                    onChange={this._changePassword}/>
                                <Button color={'green'}>Login</Button>
                            </Form>
                        </Card.Content>
                    ) : (
                        <Card.Content style={{boxSizing:'border-box', borderBottom:'1px solid #ccc', borderLeft:'1px solid #fff', borderRight:'1px solid #ccc', borderTop:'0px solid #ccc', borderRadius:'2px'}}>
                            <Form onSubmit={this.handleSubmit}>
                                {errorDisplay ? <ErrorMessage error={errorMessage} /> : null}
                                <TextInput
                                    label="Email"
                                    uniqueName="email"
                                    text="Email Address"
                                    type="text"
                                    visible={this._errorVisible.bind(this)}
                                    setErrorMessage={this._errorMessage.bind(this)}
                                    required={true}
                                    minCharacters={3}
                                    validate={this.validateEmail.bind(this)}
                                    id="username"
                                    value={this.state.email}
                                    errorMessage="Name is invalid"
                                    emptyMessage="Name is required"
                                    tooShortMessage="That email is too short"
                                    releaseLock={this._releaseLock.bind(this)}
                                    setLock={this._setLock.bind(this)}
                                    lid={2}
                                    onChange={this._changeEmail}/>
                                <TextInput
                                    label="Password"
                                    uniqueName="password"
                                    text="Password"
                                    type="password"
                                    visible={this._errorVisible.bind(this)}
                                    setErrorMessage={this._errorMessage.bind(this)}
                                    required={true}
                                    minCharacters={3}
                                    validate={this.commonValidate.bind(this)}
                                    id="password"
                                    value={this.state.password}
                                    errorMessage="Password is invalid"
                                    emptyMessage="Password is required"
                                    tooShortMessage="That password is too short"
                                    releaseLock={this._releaseLock.bind(this)}
                                    setLock={this._setLock.bind(this)}
                                    lid={3}
                                    onChange={this._changePassword}/>
                               <TextInput
                                    label="Confirm Password"
                                    uniqueName="confirm_password"
                                    text="Confirm Password"
                                    type="password"
                                    visible={this._errorVisible.bind(this)}
                                    setErrorMessage={this._errorMessage.bind(this)}
                                    required={true}
                                    minCharacters={3}
                                    validate={this.passwordConfirmValidate.bind(this)}
                                    id="password"
                                    value={this.state.passwordConfirm}
                                    errorMessage="Password does not match"
                                    emptyMessage="Password is required"
                                    tooShortMessage="That password is too short"
                                    releaseLock={this._releaseLock.bind(this)}
                                    setLock={this._setLock.bind(this)}
                                    lid={4}
                                    onChange={this._changePasswordConfirm}/>
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
