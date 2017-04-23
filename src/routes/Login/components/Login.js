import React, { Component } from 'react'
import { Button, Form, Header, Card } from 'semantic-ui-react'


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {visible:false, link:''};
    }


    render() {

        let cardStyle = {
            position: 'absolute',
            width: 450,  
            height: 200,  
            margin: 'auto',  
            padding: 15,
            top: 0,
            left: 0, 
            bottom: 100, 
            right: 0,
            zIndex: 3,
            marginTop: 300,
            marginBottom: 0,
            paddingBottom: 0 

        }

        let formStyle = {
          marginBottom: 100,
        }

        let buttonStyle = {
            marginTop: 30,
            width: '100%',
            marginBottom: 40
        }

        return (
            <div className="card big" style={cardStyle}>
                <Card color={'green'} style={formStyle}>
                    <Card.Content>
                        <Button.Group style={buttonStyle}>
                        <Button>Login</Button>
                        <Button.Or />
                        <Button positive>Sign Up</Button>
                    </Button.Group>
                        <Form action='/welcome'>
                            <Form.Field>
                                <label>User Name</label>
                                <input type="text"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Passoword</label>
                                <input type="password"/>
                            </Form.Field>
                            <a href="/welcome"><Button color={'green'}>Login</Button></a>
                        </Form>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default Welcome