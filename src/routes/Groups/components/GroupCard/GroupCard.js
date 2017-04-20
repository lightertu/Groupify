/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Icon, Card, Label, Segment, Image} from 'semantic-ui-react'
import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {DragSource, DropTarget} from 'react-dnd';

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
            <div className="card">
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

class MatchingStatus extends React.Component {
    static propTypes = {
        participant: PropTypes.object.isRequired,
    };

    render() {
        return ( <div>Bottom</div> );
    }
}



const participantTarget = {
    drop(props, monitor) {
        const participantDropped = monitor.getItem();
        if (props.groupNumber !== participantDropped.oldGroupNumber) {
            props.updateParticipantGroupNumber(participantDropped.participantId,
                participantDropped.oldGroupNumber,
                props.groupNumber)
        }
    }
};

@DropTarget([ParticipantTypes.GROUPED_PARTICIPANT, ParticipantTypes.UNGROUPED_PARTICIPANT],
    participantTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    })
)
class GroupCard extends React.Component {
    static propTypes = {
        participants: PropTypes.array.isRequired,
        capacity: PropTypes.number.isRequired,
        groupNumber: PropTypes.number.isRequired,
        itemsPerRow: PropTypes.number.isRequired,
        updateParticipantGroupNumber: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
    }


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
                <Segment.Group>
                    <Segment color='yellow' raised padded={ true } size="large" basic style={ {backgroundColor: (!isOver) ? "#fafbfd" : "#EFF0F2"} }>
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
                    <Segment basic style={ { padding: "0%", backgroundColor: (!isOver) ? "#f4f5f7" : "#EFF0F2"} }>
                        <Label.Group circular size={"huge"} style={ { marginLeft: "2%",  paddingTop: "2%"} }>
                            <Label as='a'>S</Label>
                            <Label as='a'>M</Label>
                            <Label as='a'>T</Label>
                            <Label as='a'>W</Label>
                            <Label as='a'>T</Label>
                            <Label as='a'>F</Label>
                            <Label as='a'>S</Label>
                        </Label.Group>
                    </Segment>
                    <Segment basic style={ { backgroundColor: (!isOver) ? "#f4f5f7" : "#EFF0F2"} }>
                        <Label.Group style={ { marginTop: "-1%"} }>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                            <Label as='a'>
                                Happy
                                <Label.Detail>22</Label.Detail>
                            </Label>
                        </Label.Group>
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
}

export default GroupCard;
