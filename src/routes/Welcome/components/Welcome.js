import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

export const Welcome = (props) => (
    <div className="container text-center">
        <div className="welcome-header">
            <h1 className="ui header">WELCOME <i>to Team Divider...</i></h1>
        </div>
        <p>If this is your first time start by building a form.</p>
        <br />
        <br />
        <Row className="row">
            <Col className="col1" md={4} >
            <div className="welcome-button-left">
            <button className="ui labeled icon button black basic button">
                <i className="write icon"></i>
                Create Form
            </button>
            </div>
            </Col>
            <Col className="col2" md={4}>
            <button className="ui labeled icon button black basic button">
                <i className="send icon"></i>
                Send Form&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            </Col>
            <Col className="col3" md={4}>
            <div className="welcome-button-right">
            <button className="ui labeled icon button black basic button">
                <i className="users icon"></i>
                Classes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            </div>
            </Col>
        </Row>

    </div>
)

Welcome.propTypes = {
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default Welcome
