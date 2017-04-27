/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Icon, Card, Label, Segment, Image} from 'semantic-ui-react'
import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {DragSource, DropTarget} from 'react-dnd';
import {AvailabilitySegment, SkillCountSegment} from "./MatchingStatusSegments"

import {ParticipantTypes} from "../../constants/ParticipantTypes"

const transparentImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png";

const participantCardItemSource = {
    beginDrag(props) {
        return {
            participantId: props.participant.participantId,
            oldGroupNumber: props.participant.groupNumber
        };
    }
};

@DragSource(ParticipantTypes.GROUPED_PARTICIPANT, participantCardItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
class DraggableCard extends React.Component {
    static propTypes = {
        participant: PropTypes.object.isRequired
    };

    render() {
        const {connectDragSource, isDragging, participant} = this.props;
        return connectDragSource(
            <div className="card" style={ {cursor: "move"} }>
                <ParticipantProfilePopup
                    trigger={ <Image src={ (isDragging) ? transparentImage : participant.image }/> }
                    position="top right"
                    offset={ 0 }
                    name={ participant.name }
                    image={ participant.image }
                    groupNumber={participant.groupNumber }
                    skills={ participant.skills }
                    availability={ participant.availability }
                    participantId={ participant.participantId }/>
            </div>
        )
    }
}

const participantTarget = {
    drop(props, monitor) {
        const participantDropped = monitor.getItem();
        if (props.groupNumber !== participantDropped.oldGroupNumber) {
            props.updateParticipantGroupNumber(
                props.activityId,
                participantDropped.participantId,
                participantDropped.oldGroupNumber,
                props.groupNumber)
        }
    }
};

@DropTarget([ParticipantTypes.GROUPED_PARTICIPANT, ParticipantTypes.UNGROUPED_PARTICIPANT],
    participantTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    })
)
class GroupCard extends React.Component {
    static propTypes = {
        activityId: PropTypes.string.isRequired,
        participants: PropTypes.array.isRequired,
        capacity: PropTypes.number.isRequired,
        groupNumber: PropTypes.number.isRequired,
        itemsPerRow: PropTypes.number.isRequired,
        updateParticipantGroupNumber: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            matchingStatusOpen: false,
        };
    }

    toggleMatchingStatus = () => {
        this.setState({matchingStatusOpen: !this.state.matchingStatusOpen});
    };

    render() {
        const {connectDropTarget, isOver} = this.props;

        let generateEmptySpots = () => {
            let emptyNum = this.props.capacity - this.props.participants.length;
            let result = [];
            for (let i = 0; i < emptyNum; i++) {
                result.push(
                    <Card image={ transparentImage } key={ i }/>
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

        return connectDropTarget(
            <div>
                <Segment.Group raised style={ {cursor: "pointer"} }
                               onClick={ this.toggleMatchingStatus }>
                    <Segment padded={ true } size="large"
                             style={ {backgroundColor: (!isOver) ? "#fcfcfc" : "#EFF0F2"}  }
                    >
                        <Label attached='top left'> Group { this.props.groupNumber }</Label>
                        <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>
                            {
                                this.props.participants.map((participant) =>
                                    <DraggableCard participant={ participant } key={ participant.participantId }/>
                                )
                            }
                            { generateEmptySpots() }
                        </Card.Group>
                        <Label color={ pickLabelColor(this.props.participants.length, this.props.capacity) }
                               attached="top right">
                            <Icon name='user'/> { this.props.participants.length } / { this.props.capacity }
                        </Label>
                    </Segment>

                    { (this.props.participants.length > 0 && this.state.matchingStatusOpen ) &&
                    <AvailabilitySegment participants={ this.props.participants } isOver={ isOver }/> }

                    { (this.props.participants.length > 0 && this.state.matchingStatusOpen ) &&
                    <SkillCountSegment participants={ this.props.participants } isOver={ isOver }/> }
                </Segment.Group>
            </div>
        )
    }
}

export default GroupCard;
