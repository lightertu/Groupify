/**
 * Created by rui on 4/8/17.
 * Additions made by Joseph 5/28/17
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Label, Segment, Image, Popup, Dimmer } from 'semantic-ui-react'
import ParticipantProfilePopup from '../ParticipantProfilePopup'
import { DragSource, DropTarget } from 'react-dnd'
import { Map, List, Set } from "immutable"
import { ParticipantTypes } from '../../constants/ParticipantTypes'
import * as renderFunctions from './renderFunctions'

const transparentImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png'

const participantCardItemSource = {
    beginDrag(props) {
        props.setCurrentlySelected(props.participant.participantId) // set current selected card
        return {
            participantId: props.participant.get('participantId'),
            oldGroupNumber: props.participant.get('groupNumber')
        }
    }
}

@DragSource(ParticipantTypes.GROUPED_PARTICIPANT, participantCardItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
class DraggableCard extends React.Component {
    static propTypes = {
        participant: PropTypes.object.isRequired
    }

    render () {
        const {connectDragSource, isDragging, participant} = this.props
        let surveyResponses = participant.get('surveyResponses')
        let allAnswers = Set([]);
        surveyResponses.forEach((response) => {
            allAnswers = allAnswers.union(response.get('answer'));
        });
        let filteredOut=this.props.filter.size > 0 && !(this.props.filter.isSubset(allAnswers))
        let participantCard =
            <div className="card" style={ {cursor: this.props.isLocked? 'not-allowed' : 'default'} }>
                <ParticipantProfilePopup
                    trigger={ <Image src={ (isDragging) ? transparentImage : participant.get('image') }/> }
                    position="top right"
                    offset={ 0 }
                    name={ participant.get('name') }
                    image={ participant.get('image') }
                    surveyResponses={surveyResponses}
                    groupNumber={participant.get('groupNumber') }
                    participantId={ participant.get('participantId') }/>
            </div>
        if (this.props.isLocked) {
            return ( participantCard )
        }

        return (filteredOut ? null :  connectDragSource(participantCard))
    }
}

const participantTarget = {
    drop(props, monitor) {
        props.setCurrentlySelected('') // resets curretly selected user
        const participantDropped = monitor.getItem()
        if (props.groupNumber !== participantDropped.oldGroupNumber) {
            props.updateParticipantGroupNumber(
                props.activityId,
                participantDropped.participantId,
                participantDropped.oldGroupNumber,
                props.groupNumber)
        }
    }
}

@DropTarget([ParticipantTypes.GROUPED_PARTICIPANT, ParticipantTypes.UNGROUPED_PARTICIPANT],
    participantTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    })
)
class GroupCard extends React.Component {
    static propTypes = {
        /*
        activityId: PropTypes.string.isRequired,
        participants: PropTypes.array.isRequired,
        capacity: PropTypes.number.isRequired,
        groupNumber: PropTypes.number.isRequired,
        itemsPerRow: PropTypes.number.isRequired,
        updateParticipantGroupNumber: PropTypes.func.isRequired
        */
    }

    constructor (props) {
        super(props)
    }

    render () {
        const {connectDropTarget, isOver} = this.props

        let generateEmptySpots = () => {
            let emptyNum = this.props.capacity - this.props.participants.length
            let result = []
            for (let i = 0; i < emptyNum; i++) {
                result.push(
                    <Card image={ transparentImage } key={ i }/>
                )
            }
            return result
        }
        let pickCapacityLabelColor = (size, capacity) => {
            if (size === capacity)
                return 'green'
            else if (size > capacity)
                return 'red'
            else
                return null
        }
        let responses = List([]); 
        this.props.participants.forEach((participant) => {
            participant.get('surveyResponses').forEach((response, index) => {
                (responses.size < (index + 1)) ?
                        (responses = responses
                                    .push(Map({question:response.get('question'), 
                                                answer:response.get('answer')})))
                    :
                        (responses = responses
                                    .updateIn([index, 'answer'], answer => {
                                        return answer.intersect(response.get('answer'))
                                    }))                            
            })
        });
       
        let answerSegments = [];
        responses.forEach((response, index) => {
            (renderFunctions[response.get('question')]) &&
                answerSegments.push(
                    renderFunctions[response.get('question')](response.get('answer'), index)
                );
        })

        let groupCardColor = () =>{
            if (this.props.isLocked) {
                return "#a6a6a6"
            } else if (this.props.isOver) {
                return "#f9f9f9"
            } else {
                return '#fcfcfc'
            }
        }

        let display = (
            <div>
                <Segment.Group raised style={ {
                    backgroundColor: "white",
                    opacity: this.props.isLocked? 0.5 : 1,
                    cursor: this.props.isLocked? 'not-allowed' : 'default'
                } }>
                    <Segment padded={ true } size="large" inverted={true}
                             style={{
                                 backgroundColor: groupCardColor()
                             }}
                    >
                        <Label onClick={() => {this.props.toggleLock(this.props.group, this.props.isLocked, this.props.activityId)} }
                               style={{opacity: 2, cursor: 'pointer'}}
                               attached={'top left'}
                        >
                            <Icon name={ this.props.isLocked? 'lock' : 'unlock' }/>
                            Group { this.props.groupNumber } &nbsp;
                        </Label>
                        <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>

                            { this.props.participants.map((participant) =>
                                <DraggableCard 
                                    participant={ participant } 
                                    key={ participant.get('participantId') } 
                                    filter={this.props.filter}
                                    setCurrentlySelected={ (v) => console.log(v)  }
                                    isLocked= { this.props.isLocked}
                                /> 
                            )}
                            { generateEmptySpots() }
                        </Card.Group>

                        <Label color={ pickCapacityLabelColor(this.props.participants.length, this.props.capacity) }
                               attached="top right">
                            <Icon name='user'/> { this.props.participants.length} / { this.props.capacity }
                        </Label>
                    </Segment>
                    {answerSegments}
                </Segment.Group>
            </div>
        )

        return (this.props.isLocked) ? display : connectDropTarget(display)

    }
}

export default GroupCard
