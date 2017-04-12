import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import  Welcome from "./Welcome"

export const WelcomeView = (props) => (
    <Welcome />
)

Welcome.propTypes = {
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default WelcomeView
