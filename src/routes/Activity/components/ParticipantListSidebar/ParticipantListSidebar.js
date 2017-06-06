/**
 * Created by rui on 4/10/17.
 */

import React from 'react'
import { Segment, Image, List, Button, Header, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'

import {Map, Set} from 'immutable';
import ParticipantProfilePopup from '../ParticipantProfilePopup'
import { ParticipantTypes } from '../../constants/ParticipantTypes'
import SidebarMenu from '../../../../components/SidebarMenu/SidebarMenu'
import ParticipantTrash from './ParticipantTrash'

import { Drawer, MuiThemeProvider } from 'material-ui'

const participantSidebarItemSource = {
    beginDrag(props) {
        props.setCurrentlySelected(props.participantId)
        return {
            participantId: props.participantId,
            oldGroupNumber: -1
        }
    }
}

@DragSource(ParticipantTypes.UNGROUPED_PARTICIPANT, participantSidebarItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
class DraggableParticipantListItem extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        participantId: PropTypes.string.isRequired
    }

    render () {
        const {image, name, participantId, connectDragSource, isDragging} = this.props
        let allAnswers = Set([]);
        this.props.surveyResponses.forEach((response) => {
            allAnswers = allAnswers.union(response.get('answer'));
        });
        let filteredOut=this.props.filter.size > 0 && !(this.props.filter.isSubset(allAnswers))
        return connectDragSource(
            <div className="item" onMouseEnter={this.props.onMouseEnter} 
                onMouseLeave={this.props.onMouseLeave}
                 style={{ visibility: (isDragging || filteredOut) ? 'hidden' : 'visible', 
                     cursor: 'move', padding: '7px'} }>
                <Image size="mini" shape="rounded" verticalAlign="middle" src={ image }/>
                <List.Content>
                    <List.Header> { name } </List.Header>
                </List.Content>
            </div>
        )
    }
}

class Participant extends React.Component {
    static propTypes = {
        /*
        participantId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        groupNumber: PropTypes.number.isRequired,
        availability: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,
        */
    }

    render () {
        const draggableParticipantListItem = (
            <DraggableParticipantListItem
                name={ this.props.name }
                image={ this.props.image }
                surveyResponses={ this.props.surveyResponses }
                filter={this.props.filter}
                setCurrentlySelected={(v) => {console.log(v)}}
                participantId={ this.props.participantId }
                setCurrentlySelected={(v) => {console.log(v)}}/>
        )
        return (
            <ParticipantProfilePopup
                participantId={ this.props.participantId }
                name={ this.props.name }
                image={ this.props.image }
                surveyResponses={ this.props.surveyResponses }
                setCurrentlySelected={(v) => {console.log(v)}}
                filter={this.props.filter}
                groupNumber={ this.props.groupNumber }
                position="right center"
                offset={ 20 }
                hoverable
                trigger={
                    draggableParticipantListItem
                }
            />
        )
    }
}

const participantsListStyle = { marginTop: "55px"}

const participantSidebarTarget = {
    drop(props, monitor) {
        //console.log(JSON.stringify(monitor.getItem(), null, 2));
        props.setCurrentlySelected('') // resets curretly selected user
        let droppedItem = monitor.getItem()
        if (monitor.isOver()) {
            props.updateParticipantGroupNumber(
                props.activityId,
                droppedItem.participantId,
                droppedItem.oldGroupNumber,
                -1)
        }
    },
}

function collectDrop (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

@DropTarget(ParticipantTypes.GROUPED_PARTICIPANT, participantSidebarTarget, collectDrop)
class ParticipantListSidebar extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        activityId: PropTypes.string.isRequired,
        participants: PropTypes.object.isRequired,
        updateParticipantGroupNumber: PropTypes.func.isRequired
    }

    render () {
        const {connectDropTarget, isOver} = this.props

        let getUngroupedNumber = () => (
            this.props.participants.filter((participantObj) => (
                participantObj.get('groupNumber') < 0
            )).size
        )

        let generateSidebarList = (participants) => (
            <List verticalAlign='middle' size="large" selection>
                {
                    participants.filter((participantObj) => {
                        return (participantObj.get('groupNumber') === -1);
                    })
                    .map((participantObj) => {
                        return <Participant
                            key={ participantObj.get('participantId') }
                            participantId={ participantObj.get('participantId') }
                            surveyResponses={ participantObj.get('surveyResponses') }
                            filter={this.props.filter}
                            name={ participantObj.get('name') }
                            setCurrentlySelected={(v) => {console.log(v)}}
                            image={ participantObj.get('image') }
                            groupNumber={ participantObj.get('groupNumber') }
                        />
                    })
                }
            </List>
        )

        let generateEmailButton = () => (
            <div style={ {paddingTop: '200%', textAlign: 'center'} }>
                <Header as='h2'>
                    All Grouped!
                    <Header.Subheader>
                        Next step is to notify all the students
                    </Header.Subheader>
                </Header>
                <Button color="green">
                    <Icon name='send'/>
                    Send out Email
                </Button>
            </div>
        )

        let generateEmptyMessage = () => (
            <div style={ {paddingTop: '200%', textAlign: 'center'} }>
                <Header as='h2'>
                    Get a coffee
                    <Header.Subheader>
                        No one has answered your call
                    </Header.Subheader>
                </Header>
            </div>
        )
        return connectDropTarget(
            <div>
                <MuiThemeProvider>
                    <Drawer
                        docked={ true }
                        open={ true }
                        zDepth={ 1 }
                        width={290}
                        containerStyle={{backgroundColor: (!this.props.isOver) ? '#F6F7F9' : '#EFF0F2'}}
                        style={ {zIndex: '1000 !important',  width: "290px"} }
                    >

                        <div style={ participantsListStyle }>
                            <Segment basic>
                                {
                                    (this.props.participants.size <= 0) ? 
                                        generateEmptyMessage() 
                                    : 
                                        ((getUngroupedNumber(this.props.participants)) ? 
                                            generateSidebarList(this.props.participants) 
                                        : 
                                            generateEmailButton())
                                }

                            </Segment>
                        </div>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default ParticipantListSidebar
