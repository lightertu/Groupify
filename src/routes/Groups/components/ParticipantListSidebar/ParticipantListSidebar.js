/**
 * Created by rui on 4/10/17.
 */

import React from 'react'
import {Segment, Image, List, Button, Header} from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Drawer} from "material-ui"
import PropTypes from "prop-types"
import {DragSource, DropTarget} from 'react-dnd';

import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {ParticipantTypes} from "../../constants/ParticipantTypes"

const participantSidebarItemSource = {
    beginDrag(props) {
        return {participantId: props};
    }
};

function collectDrag(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

@DragSource(ParticipantTypes.UNGROUPED_PARTICIPANT, participantSidebarItemSource, collectDrag)
class DraggableParticipantListItem extends React.Component {
    render() {

        const {image, name, connectDragSource, isDragging} = this.props;

        return connectDragSource(
            <div className="item" {...this.props } style={ {visibility: isDragging ? "hidden" : "visible"} }>
                <Image size="mini" shape="rounded" verticalAlign="middle" src={ image }/>
                <List.Content>
                    <List.Header> { name } </List.Header>
                </List.Content>
            </div>
        )
    }
}

class Participant extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const draggableParticipantListItem = (
            <DraggableParticipantListItem
                name={ this.props.name }
                image={ this.props.image }
            />
        );
        return (
            <ParticipantProfilePopup
                name={ this.props.name }
                image={ this.props.image }
                groupNumber={ this.props.groupNumber }
                skills={ this.props.skills }
                availability={ this.props.availability }
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

const peopleListStyle = {
    paddingTop: "23%"
};

const participantSidebarTarget = {
    drop(props, monitor) {
        //TODO: implement actions after dropping
        console.log(monitor.getItem().participantId + " is being switched to group: -1");
    },
};

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

@DropTarget(ParticipantTypes.GROUPED_PARTICIPANT, participantSidebarTarget, collectDrop)
class ParticipantListSidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {connectDropTarget, isOver} = this.props;

        let getUngroupedNumber = (participants) => (
            participants.filter((participantObj) => (
                participantObj.groupNumber < 0
            )).length
        );

        let generateSidebarList = (participants) => (
            <List verticalAlign='middle' size="small" selection>
                {
                    participants.filter((participantObj) => (
                        participantObj.groupNumber < 0
                    ))

                        .map((participantObj) => (
                            <Participant
                                name={ participantObj.name }
                                image={ participantObj.image }
                                groupNumber={ participantObj.groupNumber }
                                skills={ participantObj.skills }
                                availability={ participantObj.availability }
                            />
                        ))
                }
            </List>
        );

        let generateEmailButton = () => (
            <div style={ {paddingTop: "200%", textAlign: "center"} }>
                <Header as='h2'>
                    All Grouped!
                    <Header.Subheader>
                        Next step is to notify all the students
                    </Header.Subheader>
                </Header>
                <Button color='green'>Send Out Email</Button>
            </div>
        );

        return connectDropTarget(
            <div>
                <MuiThemeProvider>
                    <Drawer
                        docked={ true }
                        open={ true }
                        zDepth={ 1 }
                        containerStyle={ {backgroundColor: (!this.props.isOver) ? "#F6F7F9" : "#EFF0F2"} }
                    >
                        <div style={ peopleListStyle }>
                            <Segment basic>
                                {
                                    (getUngroupedNumber(this.props.people)) ?
                                        generateSidebarList(this.props.people) :
                                        generateEmailButton()
                                }
                            </Segment>
                        </div>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}

Participant.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    groupNumber: PropTypes.number.isRequired,
    availability: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
};

ParticipantListSidebar.propTypes = {
    people: PropTypes.array.isRequired,
    isOver: PropTypes.bool.isRequired
};

export default ParticipantListSidebar;
