/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import { Icon, Card, Label, Segment, Image } from 'semantic-ui-react'
import MemberProfilePopup from "../ParticipantProfilePopup";

class GroupCard extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'}
    }

    render() {
        let generateEmptySpots = ()  => {
            let emptyNum = this.props.capacity - this.props.members.length;
            let result = [ ];
            for (let i = 0; i < emptyNum; i++) {
                result.push(
                    <Card image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png"/>
                )
            }
            return result;
        };
        let pickLabelColor = (size, capacity) => {
            if (size === capacity)
                return "green";
            else if (size > capacity)
                return "red";
            else
                return "";
        };
        let generateMemberPictures = (members) => (
            members.map((member) =>
                <Card>
                    <MemberProfilePopup trigger = { <Image src = { member.image } /> }
                                        position ="top right"
                                        offset = { 0 }
                                        name = { member.name }
                                        image = { member.image }
                                        groupNumber = {member.groupNumber }
                                        skills = { member.skills }
                                        availability = { member.availability }
                    />
                </Card>
            )
        );

        return (
            <Segment color='yellow' raised padded={ true } size="large">
                <Label attached='top left'> Group { this.props.groupNumber }</Label>
                <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>
                    { generateMemberPictures(this.props.members) }
                    { generateEmptySpots() }
                </Card.Group>
                <Label color = { pickLabelColor(this.props.members.length, this.props.capacity) }
                       attached="top right">
                    <Icon name='user'/> { this.props.members.length } / { this.props.capacity }
                </Label>
            </Segment>
        )
    }
}

GroupCard.propTypes = {
    members: PropTypes.array.isRequired,
    capacity: PropTypes.number.isRequired,
    groupNumber: PropTypes.number.isRequired,
    itemsPerRow: PropTypes.number.isRequired
};

export default GroupCard;
