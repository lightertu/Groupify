/**
 * Created by rui on 4/10/17.
 */
/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Segment, Image, List, Icon, Button, Header, Card} from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Drawer} from "material-ui"
import PropTypes from "prop-types"
import {DragSource} from 'react-dnd';
import {findDOMNode} from 'react-dom';


import ParticipantProfilePopup from "../ParticipantProfilePopup";
import {ParticipantTypes} from "../../constants/ParticipantTypes"

const participantSource = {
    beginDrag(props) {
        return {participantId: props.id};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ParticipantTypes.PARTICIPANT, participantSource, collect)
class DraggableParticipantListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {connectDragSource, isDragging} = this.props;

        return connectDragSource(
            <div className="item">
                <Image size="mini" shape="rounded" verticalAlign="middle" src={ this.props.image }/>
                <List.Content>
                    <List.Header> { this.props.name } </List.Header>
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
            >
            </DraggableParticipantListItem>
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

/*
 <List.Item>
 <Image size="mini" shape="rounded" verticalAlign="middle" src={ this.props.image }/>
 <List.Content>
 <List.Header> { this.props.name } </List.Header>
 </List.Content>
 </List.Item>
 */
const peopleListStyle = {
    paddingTop: "23%"
};

class ParticipantListSidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let getUngroupedNumber = (members) => (
            members.filter((personObj) => (
                personObj.groupNumber < 0
            )).length
        );

        let generateSidebarList = (members) => (
            <List verticalAlign='middle' size="small" selection>
                {
                    members.filter((personObj) => (
                        personObj.groupNumber < 0
                    ))

                        .map((personObj) => (
                            <Participant
                                name={ personObj.name }
                                image={ personObj.image }
                                groupNumber={ personObj.groupNumber }
                                skills={ personObj.skills }
                                availability={ personObj.availability }
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

        return (
            <MuiThemeProvider>
                <Drawer
                    docked={ true }
                    open={ true }
                    zDepth={ 1 }
                    containerStyle={ {backgroundColor: "#F6F7F9"} }
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
        )
    }
}

/*
 */

Participant.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    groupNumber: PropTypes.number.isRequired,
    availability: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
};

ParticipantListSidebar.propTypes = {
    people: PropTypes.array.isRequired
};

export default ParticipantListSidebar;
