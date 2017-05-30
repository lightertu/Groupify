/**
 * Created by rui on 4/10/17.
 */

import React from 'react'
import {Segment, Image, List, Button, Header, Icon} from 'semantic-ui-react'
import PropTypes from "prop-types"
import {DragSource, DropTarget} from 'react-dnd';

import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {ParticipantTypes} from "../../constants/ParticipantTypes"
import SidebarMenu from "../../../../components/SidebarMenu/SidebarMenu";
import ParticipantTrash from "./ParticipantTrash";

const participantSidebarItemSource = {
    beginDrag(props) {
        props.setCurrentlySelected(props.participantId);
        return {
            participantId: props.participantId,
            oldGroupNumber: -1
        };
    }
};

@DragSource(ParticipantTypes.UNGROUPED_PARTICIPANT, participantSidebarItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
class DraggableParticipantListItem extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        participantId: PropTypes.string.isRequired
    };

    render() {
        const {image, name, participantId, connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div className="item" {...this.props }
                 style={ {visibility: isDragging ? "hidden" : "visible", cursor: "move", padding:"7px" } }>
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
        participantId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        groupNumber: PropTypes.number.isRequired,
        availability: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,
    };

    render() {
        const draggableParticipantListItem = (
            <DraggableParticipantListItem
                name={ this.props.name }
                image={ this.props.image }
                participantId={ this.props.participantId }
                setCurrentlySelected={this.props.setCurrentlySelected}/>
        );
        return (
            <ParticipantProfilePopup
                participantId={ this.props.participantId }
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

const participantsListStyle = {
};

const participantSidebarTarget = {
    drop(props, monitor) {
        //console.log(JSON.stringify(monitor.getItem(), null, 2));
        props.setCurrentlySelected(""); // resets curretly selected user
        let droppedItem = monitor.getItem();
        if(monitor.isOver()) {
            props.updateParticipantGroupNumber(
                props.activityId,
                droppedItem.participantId,
                droppedItem.oldGroupNumber,
                -1)
        }
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
        super(props);

        this.state = ({trashed: false});
        this.handleTrashed = this.handleTrashed.bind(this);

    }


    static propTypes = {
        activityId: PropTypes.string.isRequired,
        participants: PropTypes.array.isRequired,
        updateParticipantGroupNumber: PropTypes.func.isRequired
    };

    handleTrashed() {
        this.setState({trashed: true});
        let start = new Date().getTime();
        let end = start;
        while(end < start + 3000) {
            end = new Date().getTime();
        }


        this.setState({trashed: false});
    }

    render() {
        const {connectDropTarget, isOver} = this.props;

        let getUngroupedNumber = (participants) => (
            participants.filter((participantObj) => (
                participantObj.groupNumber < 0
            )).length
        );

        let generateSidebarList = (participants) => (
            <List verticalAlign='middle' size="large" selection>
                {
                    participants.filter((participantObj) => (
                        participantObj.groupNumber == -1
                    ))

                        .map((participantObj) => (
                            <Participant
                                key={ participantObj.participantId }
                                participantId={ participantObj.participantId }
                                name={ participantObj.name }
                                image={ participantObj.image }
                                groupNumber={ participantObj.groupNumber }
                                skills={ participantObj.skills }
                                availability={ participantObj.availability }
                                setCurrentlySelected={ this.props.setCurrentlySelected }
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
                <Button color="green">
                    <Icon name='send' />
                    Send out Email
                </Button>
            </div>
        );

        let generateEmptyMessage = () => (
            <div style={ {paddingTop: "200%", textAlign: "center"} }>
                <Header as='h2'>
                    Get a coffee
                    <Header.Subheader>
                        No one has answered your call
                    </Header.Subheader>
                </Header>
            </div>
        );

        return connectDropTarget(
            <div>
                <SidebarMenu size="large" style={ {backgroundColor: (!this.props.isOver) ? "#F6F7F9" : "#EFF0F2"} }>
                    <div style={ participantsListStyle }>
                        <Segment basic>
                            {
                                (this.props.participants.length <= 0) ?
                                    generateEmptyMessage() :
                                    ((getUngroupedNumber(this.props.participants)) ?
                                        generateSidebarList(this.props.participants) :
                                        generateEmailButton())
                            }

                            <ParticipantTrash 
                                participants={ this.props.participants }
                                        updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }
                                        activityId={ this.props.activityId }
                                        setCurrentlySelected={this.props.setCurrentlySelected}
                                        dragging={ this.props.dragging }
                                        trashed={ this.state.trashed }
                                        handleTrashed={ this.handleTrashed.bind(this) }
                                        />
                        </Segment>
                    </div>
                </SidebarMenu>
            </div>
        )
    }
}

export default ParticipantListSidebar;
