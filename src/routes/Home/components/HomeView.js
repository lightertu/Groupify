import React, { Component, PropTypes } from 'react'
import { Button, Header } from 'semantic-ui-react'

export default class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        replace: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,

        redirect: PropTypes.string.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            console.log("redirect");
            replace(redirect)
        }
    }
    render() {
        return (
            <div style={{textAlign:'center', marginTop:'200px'}}>
                <Header size='huge'>
                    Welcome to Groupify
                </Header>

                <Header size='large'>
                    <i>The most efficient web application for creating teams based on timewise availability.</i>
                </Header>

                <Button style={{marginTop:20}}>
                    Get Started
                </Button>
            </div>
        )
    }
}

