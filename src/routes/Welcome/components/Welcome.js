import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

export const Welcome = (props) => (
    <div className="container text-center">
        <div className="welcome-header">
            <span><h1 className="header">WELCOME<div className="inner"> <i>to</i>Team Divider...</div></h1></span>
        </div>
        <h2 className="sub-header">If this is your first time start by building a form.</h2>
        <br />
        <br />
        <div className="row">
        <div className="ui stackable two column centered grid">
            <div className="column">
            <div className="welcome-button-left">
            <button className="massive ui labeled icon button black basic button ">
                <i className="download icon"></i>
                Generate Link
            </button>
            </div>
            </div>
            <div className="column">
            <div className="welcome-button-right">
            <button className="massive ui labeled icon button black basic button ">
                <i className="users icon"></i>
                Classes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            </div>
            </div>
        </div>
        </div>


    </div>
)

Welcome.propTypes = {
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default Welcome
