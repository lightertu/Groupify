import React, { Component } from 'react'
import {Card, Menu, Form,  Modal, Button, Header, Image, Popup} from 'semantic-ui-react'

class AuthenticationModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: '', login: true, activeItem: 'Login', open: true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemClick= this.handleItemClick.bind(this);
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSubmit(e) {
    //todo: action stuff
  }
  
  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

        const cardStyle = {
        }

        const { activeItem } = this.state
    return (
            <Modal size='small' basic closeOnDimmerClick={false} closeOnDimmerClick={false} dimmer='blurring' open={this.state.open} onClose={this.close}>
                <Modal.Content>
                        <Card centered>
                            <Menu tabular attached='top' widths={2}>
                                <Menu.Item name='Login' active={activeItem === 'Login'}  style={{borderBottom:0}} onClick={this.handleItemClick} />
                                <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} style={{borderBottom:0}} onClick={this.handleItemClick} />
                            </Menu>
                            {(activeItem === 'Login') ? (
                                <Card.Content  style={{boxSizing:'border-box', borderBottom:'1px solid #ccc', borderRight:'1px solid #fff', borderLeft:'1px solid #ccc', borderTop:'0px solid #ccc', borderRadius:'2px'}} >
                                    <Form onSubmit={this.handleSubmit} action='/'>
                                        <Form.Field>
                                            <label>Email</label>
                                            <input type="text" value={this.state.email}/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Passoword</label>
                                            <input type="password" value={this.state.password}/>
                                        </Form.Field>
                                        <div className="ui center aligned">
                                            <Button className="ui button black" onClick={this.close}>
                                                Cancel
                                            </Button>
                                            <a href="/dashboard">
                                                <Button className="ui button green">
                                                    Login
                                                </Button>
                                            </a>
                                        </div>
                                    </Form>
                                </Card.Content>
                            ) : (
                                <Card.Content style={{boxSizing:'border-box', borderBottom:'1px solid #ccc', borderLeft:'1px solid #fff', borderRight:'1px solid #ccc', borderTop:'0px solid #ccc', borderRadius:'2px'}}>
                                    <Form onSubmit={this.handleSubmit} action='/'>
                                        <Form.Field>
                                            <label>Email</label>
                                            <input type="text" value={this.state.email}/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Passoword</label>
                                            <input type="password" value={this.state.password}/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Confirm Password</label>
                                            <input type="password" value={this.state.email}/>
                                        </Form.Field>
                                        <div className="ui center aligned">
                                            <Button className="ui button black" onClick={this.close}>
                                                Cancel
                                            </Button>
                                            <a href="/dashboard">
                                                <Button className="ui button green">
                                                    Login
                                                </Button>
                                            </a>
                                        </div>
                        
                                    </Form>
                                </Card.Content>
                            )}
                        </Card>
                </Modal.Content>
            </Modal>
    )
  }
}

export default AuthenticationModal

