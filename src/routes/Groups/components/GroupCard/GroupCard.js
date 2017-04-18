/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import { Icon, Card, Label, Segment, Image } from 'semantic-ui-react'
import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {DragSource, DropTarget} from 'react-dnd';

import {ParticipantTypes} from "../../constants/ParticipantTypes"

const participantCardItemSource = {
    beginDrag(props) {
        // TODO: this is where action will be fired:w
        return { participantId: props.participant.name };
    }
};

@DragSource(ParticipantTypes.GROUPED_PARTICIPANT, participantCardItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
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

const participantTarget = {
    drop(props, monitor) {
        // TODO: implement dropped
        const participantDropped = monitor.getItem();
        console.log(participantDropped.participantId + " is being switched to group: " + props.groupNumber);
    }
};

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

@DropTarget([ParticipantTypes.GROUPED_PARTICIPANT, ParticipantTypes.UNGROUPED_PARTICIPANT], participantTarget, collectDrop)
class GroupCard extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'}
    }

    render() {
        const { connectDropTarget, isOver } = this.props;

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
        return connectDropTarget(
            <div style={ {backgroundColor: (!isOver) ? "#F6F7F9" : "#C1C1C1"} }>
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
            </div>
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
