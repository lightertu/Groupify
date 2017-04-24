/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Grid} from 'semantic-ui-react'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ParticipantListSidebar from "./ParticipantListSidebar"

import GroupCard from "./GroupCard/GroupCard"

export class GroupsView extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchParticipantList("cool");
    }

    render() {
        const participantsListWidth = 4;
        const groupCardsWidth = 12;
        let numOfGroups = this.props.totalCapacity / this.props.groupCapacity;

        let separateIntoGroups = (participants) => {
            let groups = [];
            for (let i = 0; i < numOfGroups; i++) {
                groups.push({
                    groupNumber: i,
                    participants: []
                })
            }

            for (let i = 0; i < participants.length; i++) {
                let participantGroupNumber = participants[i].groupNumber;
                if (participantGroupNumber >= 0 && participantGroupNumber < numOfGroups) {
                    groups[participantGroupNumber].participants.push(participants[i]);
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
                                       capacity={ this.props.groupCapacity }
                                       groupNumber={ group.groupNumber }
                                       itemsPerRow={ 10 }
                                       updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }/>
                        </Grid.Column>
                    )
                )
            )
        };

        return (
            <div>
                <ParticipantListSidebar participants={ this.props.participants }
                                        updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }/>
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