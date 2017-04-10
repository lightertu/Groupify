/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Icon, Card, Label, Segment, } from 'semantic-ui-react'

class GroupCard extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'}
    }

    insertEmptySpots = ()  => {
        let emptyNum = this.props.capacity - this.props.members.length;
        let result = [ ];
        for (let i = 0; i < emptyNum; i++) {
            result.push(
                <Card image="http://www.iconarchive.com/download/i93787/custom-icon-design/silky-line-user/user2-add.ico"/>
            )
        }
        return result;
    }

    render() {
        const itemsInRow = 5;
        return (
            <Segment color='yellow' raised padded={ true } size="large">
                <Label attached='top left'> Group { this.props.groupNumber }</Label>
                <Card.Group itemsPerRow={ itemsInRow } stackable>

                    {
                        this.props.members.map((member) =>
                            <Card image = { member.image } />
                        )
                    }

                    {
                        this.insertEmptySpots()
                    }

                </Card.Group>
                <Label attached="top right">
                    <Icon name='user'/> { this.props.members.length}/{ this.props.capacity }
                    </Label>
            </Segment>
        )
    }
}

GroupCard.propTypes = {
    members: React.PropTypes.array.isRequired,
    capacity: React.PropTypes.number.isRequired,
    groupNumber: React.PropTypes.number.isRequired
}

export default GroupCard;
