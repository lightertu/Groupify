import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class DashboardCard extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        let style = {
          color: "black"
        };

        return (
            <a style={style} href={this.props.link} className="dashcard">
            <Card color={this.props.color} raised={true} size="large">
                <Card.Content >
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Meta attached='top left'>just some simple content</Card.Meta>
                    <Card.Description>Created: {this.props.date}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                     <Icon name={this.props.icon} />
                        {this.props.num} {this.props.counting}
                    </a>
                </Card.Content>
            </Card>
            </a>
        )
    }
}

export default DashboardCard;