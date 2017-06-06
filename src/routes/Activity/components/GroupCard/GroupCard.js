/**
 * Created by rui on 4/8/17.
 * Additions made by Joseph 5/28/17
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Label, Segment, Image, Popup, Dimmer } from 'semantic-ui-react'
import ParticipantProfilePopup from '../ParticipantProfilePopup'
import { DragSource, DropTarget } from 'react-dnd'
import { AvailabilitySegment, SkillCountSegment } from './MatchingStatusSegments'

import { ParticipantTypes } from '../../constants/ParticipantTypes'

const transparentImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png'

const participantCardItemSource = {
    beginDrag(props) {
        console.log(props);
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
        let participantCard =
            <div className="card" style={ {cursor: this.props.unlocked ? 'not-allowed' : 'default'} }>
                <ParticipantProfilePopup
                    trigger={ <Image src={ (isDragging) ? transparentImage : participant.get('image') }/> }
                    position="top right"
                    offset={ 0 }
                    name={ participant.get('name') }
                    image={ participant.get('image') }
                    surveyResponses={ participant.get('surveyResponses') }
                    groupNumber={participant.get('groupNumber') }
                    participantId={ participant.get('participantId') }/>
            </div>
        if (this.props.unlocked) {
            return ( participantCard )
        }

        return connectDragSource(participantCard)
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

        let overAllAvailability = (participants) => {
            if (participants.length <= 0) {
                return [false, false, false, false, false, false, false]
            }
            return participants.reduce((acc, participant) => {
                for (let i = 0; i < 7; i++) {
                    acc[i] = acc[i] && participant.availability[i]
                }

                return acc
            }, [true, true, true, true, true, true, true])
        }

        let generateSkillCountMap = (participants) => {
            let skillCountMap = {}
            for (let i = 0; i < participants.length; i++) {
                let skills = participants[i].skills
                for (let j = 0; j < skills.length; j++) {
                    let skillName = skills[j].name
                    if (!(skillName in skillCountMap)) {
                        skillCountMap[skillName] = 1
                    } else {
                        skillCountMap[skillName]++
                    }
                }
            }
            return skillCountMap
        }

        let display = (
            <div>
                <Segment.Group raised style={ {
                    backgroundColor: 'white',
                    opacity: this.props.unlocked ? 0.5 : 1,
                    cursor: this.props.unlocked ? 'not-allowed' : 'default'
                } }>
                    <Segment padded={ true } size="large" inverted={true}
                             style={{
                                 backgroundColor: '#fcfcfc',
                             }}
                    >
                        <Label onClick={() => {this.props.toggleLock(this.props.group)} }
                               style={{opacity: 2, cursor: 'pointer'}}
                               attached={'top left'}
                        >
                            <Icon name={ this.props.unlocked ? 'lock' : 'unlock' }/>
                            Group { this.props.groupNumber } &nbsp;
                        </Label>
                        <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>

                            { this.props.participants.map((participant) =>
                                <DraggableCard 
                                    participant={ participant } 
                                    key={ participant.get('participantId') } 
                                    setCurrentlySelected={ (v) => console.log(v)  }
                                    unlocked= { this.props.unlocked }
                                /> 
                            )}
                            { generateEmptySpots() }
                        </Card.Group>

                        <Label color={ pickCapacityLabelColor(this.props.participants.length, this.props.capacity) }
                               attached="top right">
                            <Icon name='user'/> { this.props.participants.length} / { this.props.capacity }
                        </Label>
                    </Segment>
                    {
                        //Question Segment
                    }
                </Segment.Group>
            </div>
        )

        return (this.props.unlocked) ? display : connectDropTarget(display)

    }
}

export default GroupCard
