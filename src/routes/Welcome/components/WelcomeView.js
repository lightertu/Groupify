import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'

export default class WelcomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={{textAlign:'center', marginTop:'50%'}}>
                    <Header size='huge'>
                        Welcome to Groupify
                    </Header>

                    <Header size='large'>
                        <i>The most efficient web application for creating teams
                        based on timewise availability.</i>
                    </Header>
                    
                    <a href="/dashboard">
                        <Button style={{marginTop:20}} className="massive ui right labeled icon blue button">
                            <i className="arrow right icon"></i>
                            Get Started
                        </Button>
                   </a>
           </div>
        )
    }
}
