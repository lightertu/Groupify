/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Icon, Card, Label, Segment, Popup, Image } from 'semantic-ui-react'
import MemberProfilePopup from "../MemberProfilePopup";

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


    labelColor = () => {
        if (this.props.members.length === this.props.capacity) {
            return "green";
        } else if (this.props.members.length > this.props.capacity) {
            return "red";
        } else {
            return "grey";
        }
    }

    render() {
        const itemsInRow = 5;
        return (
            <Segment color='yellow' raised padded={ true } size="large">
                <Label attached='top left'> Group { this.props.groupNumber }</Label>
                <Card.Group itemsPerRow={ itemsInRow } stackable>

                    {
                        this.props.members.map((member) =>
                        <Card>
                            <MemberProfilePopup trigger= { <Image src = { member.image } /> }
                                                position="top left"/>
                        </Card>
                        )
                    }

                    {
                        this.insertEmptySpots()
                    }

                </Card.Group>
                <Label color = {this.labelColor()} attached="top right">
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
