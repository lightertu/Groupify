/**
 * Created by rui on 4/8/17.
 * Additions made by Joseph 5/28/17
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
        props.setCurrentlySelected(props.participant.participantId) // set current selected card
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
        props.setCurrentlySelected(""); // resets curretly selected user
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
            matchingStatusOpen: true, availability: [], skills: []
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

        let overAllAvailability = (participants) => {
            if (participants.length <= 0) {
                return [false, false, false, false, false, false, false];
            }
            return participants.reduce((acc, participant) => {
                for (let i = 0; i <  7; i++) {
                    acc[i] = acc[i] && participant.availability[i];
                }

                return acc;
            }, [true, true, true, true, true, true, true]);
        };

        let generateSkillCountMap = (participants) => {
            let skillCountMap = {};
            for (let i = 0; i < participants.length; i++) {
                let skills = participants[i].skills;
                for (let j = 0; j < skills.length; j++) {
                    let skillName = skills[j].name;
                    if (!(skillName in skillCountMap)) {
                        skillCountMap[skillName] = 1;
                    } else {
                        skillCountMap[skillName]++;
                    }
                }
            }
            return skillCountMap;
    };

        let skills = generateSkillCountMap(this.props.participants);
        let days = overAllAvailability(this.props.participants)
        let numsTodays = {1: "monday", 2: "tuseday", 3: "wednesday", 4: "thursday", 5: "friday", 6: "saturday", 0: "sunday"};
        let daysToNums = {"monday": 1, "tuseday": 2, "wednesday": 3, "thursday": 4, "friday": 5, "saturday": 6, "sunday": 0}
        let count = 0;
        let color = "";
        let i;
        let itemCount = this.props.matching.size;
        let view = true;

        if(itemCount > 0) {
            for(i = 0; i < days.length; i++) {
                if(this.props.matching.has(numsTodays[i]) && days[i]) {
                    count++;
                }

            }
            let keys = Object.keys(skills);
            for(i = 0; i < keys.length; i++) {
                if(this.props.matching.has(keys[i])) {
                    count++;
                }
            }

            let result = (count/itemCount);

            if(result < .45) {
                color = "red";
            } else if(result < .70) {
                color = "yellow";
            } else {
                color = "green";
            }
        }
        
         for(i = 0; i < this.props.filters.length; i++) {
            
                if(this.props.filters[i] in daysToNums) {
                    console.log(this.props.filters[i])
                    if(!days[daysToNums[this.props.filters[i]]]) {
                        console.log(i)
                        console.log(days[daysToNums[this.props.filters[i]]])
                        view = false;
                        break;
                    }
                } else {
                    if(Object.keys(skills).indexOf(this.props.filters[i]) == -1) {
                        view = false;
                        break;
                    }
                }   
            }
      
        let display;
        if(view) {
            display = (
                        <Segment.Group raised style={ {cursor: "pointer"} }
                               onClick={ this.toggleMatchingStatus }
                               >
                    <Segment padded={ true } size="large" color={color} inverted={true}
                             style={ {backgroundColor: (!isOver) ? "#fcfcfc" : "#EFF0F2"}  }
                    >
                        <Label attached='top left'> Group { this.props.groupNumber }</Label>
                        <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>
                            {
                                this.props.participants.map((participant) =>
                                    <DraggableCard 
                                        participant={ participant } 
                                        key={ participant.participantId } 
                                        setCurrentlySelected={this.props.setCurrentlySelected}
                                        />
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
                );
        }

        return connectDropTarget(
            <div>
                {display}
            </div>
        )
    }
}

export default GroupCard;
