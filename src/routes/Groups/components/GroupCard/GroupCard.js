/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import { Icon, Card, Label, Segment, Image } from 'semantic-ui-react'
import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {DragSource} from 'react-dnd';

import {ParticipantTypes} from "../../constants/ParticipantTypes"

const participantSource = {
    beginDrag(props) {
        return { participantId: props.id };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ParticipantTypes.PARTICIPANT, participantSource, collect)
class DraggableCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {connectDragSource, isDragging, participant} = this.props;
        return connectDragSource(
            <div className="card" style = { { visibility: isDragging ? "hidden": "visible"} }>
                <ParticipantProfilePopup trigger = { <Image src= { participant.image } /> }
                                         position ="top right"
                                         offset = { 0 }
                                         name = { participant.name }
                                         image = { participant.image }
                                         groupNumber = {participant.groupNumber }
                                         skills = { participant.skills }
                                         availability = { participant.availability }
                />
            </div>
        )
    }
}

class GroupCard extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'}
    }

    render() {
        let generateEmptySpots = ()  => {
            let emptyNum = this.props.capacity - this.props.participants.length;
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
                return null;
        };
        let generateParticipantPictures = (participants) => {
            return (
                participants.map((participant) =>
                    <DraggableCard participant = { participant } />
                )
            );
        };

        return (
            <Segment color='yellow' raised padded={ true } size="large">
                <Label attached='top left'> Group { this.props.groupNumber }</Label>
                <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>
                    { generateParticipantPictures(this.props.participants) }
                    { generateEmptySpots() }
                </Card.Group>
                <Label color = { pickLabelColor(this.props.participants.length, this.props.capacity) }
                       attached="top right">
                    <Icon name='user'/> { this.props.participants.length } / { this.props.capacity }
                </Label>
            </Segment>
        )
    }
}

DraggableCard.propTypes = {
    participant: PropTypes.object.isRequired
};

GroupCard.propTypes = {
    participants: PropTypes.array.isRequired,
    capacity: PropTypes.number.isRequired,
    groupNumber: PropTypes.number.isRequired,
    itemsPerRow: PropTypes.number.isRequired
};

export default GroupCard;
