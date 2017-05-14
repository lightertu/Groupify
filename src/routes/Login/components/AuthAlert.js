import React, { Component } from 'react'
import {Input,  Button, Form, Header, Card , Menu, Segment, Icon} from 'semantic-ui-react'
import axios from 'axios';

class AuthAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {on: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({on:!this.state.on});
    }

    render() {
    
        let alert, color;
        if(this.props.message && this.state.on) {
            if(this.props.failure) {
                    color = "green";
                } else {
                    color = "red"
                }

            let styles = {
                marginBottom: 12
            }

            alert = (
                    <Segment inverted color={color} style={styles}>
                        {this.props.message}
                    </Segment>
                    )      
        }

        return (
            <div style={{textAlign:'center'}}>
                {alert}
            </div>
        )
    }
}

export default AuthAlert
