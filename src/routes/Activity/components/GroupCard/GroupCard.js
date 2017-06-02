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
        props.setCurrentlySelected(props.participant.participantId) // set current selected card
        return {
            participantId: props.participant.participantId,
            oldGroupNumber: props.participant.groupNumber
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

        if (this.props.unlocked) {
            return (
                <div className="card" style={ {cursor: this.props.unlocked ? "not-allowed" : "default"} }>
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

        return connectDragSource(
            <div className="card" style={ {cursor: 'move'} }>
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
        activityId: PropTypes.string.isRequired,
        participants: PropTypes.array.isRequired,
        capacity: PropTypes.number.isRequired,
        groupNumber: PropTypes.number.isRequired,
        itemsPerRow: PropTypes.number.isRequired,
        updateParticipantGroupNumber: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props)
        this.state = {
            matchingStatusOpen: true, availability: [], skills: []
        }

    }

    toggleMatchingStatus = () => {
        // this.setState({matchingStatusOpen: !this.state.matchingStatusOpen});
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

        let skills = generateSkillCountMap(this.props.participants)
        let days = overAllAvailability(this.props.participants)
        let numsTodays = {
            1: 'monday',
            2: 'tuseday',
            3: 'wednesday',
            4: 'thursday',
            5: 'friday',
            6: 'saturday',
            0: 'sunday'
        }
        let daysToNums = {
            'monday': 1,
            'tuseday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
            'sunday': 0
        }
        let count = 0
        let matchingColor = ''
        let i
        let itemCount = this.props.matching.size
        let view = true
        let result = 0
        if (itemCount > 0) {
            for (i = 0; i < days.length; i++) {
                if (this.props.matching.has(numsTodays[i]) && days[i]) {
                    count++
                }

            }

            let keys = Object.keys(skills)
            for (i = 0; i < keys.length; i++) {
                if (this.props.matching.has(keys[i])) {
                    count++
                }
            }

            result = Math.round((count / itemCount) * 100) / 100

            if (result > .70 || this.props.participants.length === 0) {
                matchingColor = 'green'
            } else if (result > .45) {
                matchingColor = 'yellow'
            } else {
                matchingColor = 'red'
            }
        }

        for (i = 0; i < this.props.filters.length; i++) {
            if (this.props.filters[i] in daysToNums) {
                if (!days[daysToNums[this.props.filters[i]]]) {
                    view = false
                    break
                }
            } else {
                if (Object.keys(skills).indexOf(this.props.filters[i]) === -1) {
                    view = false
                    break
                }
            }
        }

        let background = ''
        if (this.props.participants.some((el) => el.participantId === this.props.draggedUser)) {
            background = 'black'
        }

        let lockIcon = 'lock'
        if (this.props.unlocked) {
            lockIcon = 'unlock'
            matchingColor = 'grey'
        }
        //<Label attached='top left'> Group { this.props.groupNumber }</Label>
        let test = {
            top: 0,
            left: 0,
            marginTop: -24,
            marginLeft: -24,
            marginRight: 0,
            paddingRight: 0,
            marginBottom: 10
        }

        let display
        if (view) {
            display = (
                <Segment.Group raised style={ {
                    backgroundColor: background,
                    opacity: this.props.unlocked ? 0.5 : 1,
                    cursor: this.props.unlocked ? 'not-allowed' : 'default'
                } }>
                    <Segment padded={ true } size="large" color={matchingColor} inverted={true}
                             style={{
                                 backgroundColor: '#fcfcfc',
                             }}
                    >
                        <Label onClick={() => {this.props.toggleLock(this.props.group)} }
                               style={{ opacity: 2, cursor: "pointer" }}
                               attached={'top left'}
                        >
                            <Icon name={ this.props.unlocked ? "lock" : "unlock" }/>
                            Group { this.props.groupNumber } &nbsp;
                            {/*matching: &nbsp;{Math.round(result*100)}% */}

                        </Label>
                        <Card.Group itemsPerRow={ this.props.itemsPerRow} stackable>
                            {
                                this.props.participants.map((participant) =>
                                    <DraggableCard
                                        participant={ participant }
                                        key={ participant.participantId }
                                        setCurrentlySelected={ this.props.setCurrentlySelected }
                                        unlocked={ this.props.unlocked }
                                    />
                                )
                            }
                            { generateEmptySpots() }
                        </Card.Group>

                        <Label color={ pickCapacityLabelColor(this.props.participants.length, this.props.capacity) }
                               attached="top right">
                            <Icon name='user'/> { this.props.participants.length } / { this.props.capacity }
                        </Label>
                    </Segment>

                    { (this.props.participants.length > 0 && this.state.matchingStatusOpen ) &&
                    <AvailabilitySegment participants={ this.props.participants }
                                         isOver={ isOver }/> }

                    { (this.props.participants.length > 0 && this.state.matchingStatusOpen ) &&
                    <SkillCountSegment participants={ this.props.participants }
                                       isOver={ isOver }/> }
                </Segment.Group>
            )
        }

        if (this.props.unlocked) { // if locked nothing can be dragged into it
            return (
                <div>
                    {display}
                </div>
            )
        }

        return connectDropTarget(
            <div>
                {display}
            </div>
        )
    }
}

export default GroupCard
