import React from 'react'
import { Card, Label, Segment, Image } from 'semantic-ui-react'

class DashboardCard extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <Segment color={this.props.color} raised padded={true} size="large">
                <Label attached='top left'>{this.props.title}</Label>
                <p>just some simple content</p>
            </Segment>
        )
    }
}

export default DashboardCard;