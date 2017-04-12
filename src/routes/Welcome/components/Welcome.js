import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { Button } from 'semantic-ui-react'

class Welcome extends Component {
    state = { visible: false }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        console.log(visible);
        let link;
        let loading;
        if(visible) {
            link = <div className="link" key="visible"><p><strong> Copy Link:</strong>  <span className="line">OIGY*R^F*&TOYqipuehp9h&GO^GI%FI%FO&%</span></p></div>
            loading = "loading button"
        }
        return (
            <div className="container text-center">
        <div className="welcome-header">
            <span><h1 className="header">WELCOME<div className="inner"> <i>to</i>Team Divider...</div></h1></span>
        </div>
        <h2 className="sub-header"><i>If this is your first time start by building a form.</i></h2>
        <br />
        <br />
        <div className="row">
        <div className="ui stackable two column centered grid">
            <div className="column">
            <div className="welcome-button-left">
            <Button onClick={this.toggleVisibility} className={"massive ui labeled icon button black basic button " + loading}>
                <i className="download icon"></i>
                Generate Link
            </Button>
            </div>
            </div>
            <div className="column">
            <div className="welcome-button-right">
            <Button className="massive ui labeled icon button black basic button ">
                <i className="users icon"></i>
                Classes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            </div>
            </div>
        </div>
        </div>
        <br />
        <br />
        <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={300}>
            {link}
        </CSSTransitionGroup>
    </div>
        )
    }
}

export default Welcome