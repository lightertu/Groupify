/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Grid} from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ParticipantListSidebar from "./ParticipantListSidebar"

import "./GroupsView.scss"
import GroupCard from "./GroupCard/GroupCard"
import generateUsers from "../modules/UserGenerator";

let capacity = 6,
    numOfGroups = 10;


export class GroupsView extends React.Component {
    render() {
        alert(this.props.participants);
        const participantsListWidth = 4;
        const groupCardsWidth = 12;

        let separateIntoGroups = (participants) => {
            let groups = [];
            for (let i = 0; i < this.props.participants.length / capacity; i++) {
                let newGroup = {};
                newGroup.capacity = capacity;
                newGroup.groupNumber = i;
                newGroup.participants = [];
                groups.push(newGroup);
            }


            for (let i = 0; i < this.props.participants.length; i++) {
                if (participants[i].groupNumber >= 0 && participants[i].groupNumber < this.props.participants.length) {
                    groups[participants[i].groupNumber].participants.push(participants[i]);
                } else if (participants[i].groupNumber >= this.props.participants.length) {
                    alert("user " + participants[i].name + "has group number: " + participants[i].groupNumber + " which is out of bound " );
                }
            }

            return groups;
        };

        let getGroupCards = (groups) => {
            return (
                groups.map(
                    (group) => (
                        <Grid.Column stretched key={ group.groupNumber }>
                            <GroupCard participants={ group.participants }
                                       capacity={ group.capacity }
                                       groupNumber={ group.groupNumber}
                                       itemsPerRow= { 10 } />
                        </Grid.Column>
                    )
                )
            )
        };

        return (
            <div>
                <ParticipantListSidebar participants={ this.props.participants }/>
                <div className="" style={ {marginTop: "2%", marginLeft: "5%"} }>
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={ participantsListWidth }>
                            </Grid.Column>
                            <Grid.Column width={ groupCardsWidth }>
                                <Grid columns={ 1 }>
                                    { getGroupCards(separateIntoGroups(this.props.participants)) }
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(GroupsView)