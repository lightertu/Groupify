/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ParticipantListSidebar from "./ParticipantListSidebar"

import GroupCard from "./GroupCard/GroupCard"
import FilterMenu from "./FilterMenu"

export class ActivityCardViewWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="" style={ {
                marginTop: "3%",
                paddingLeft: "290px",
            } }>
                <Grid >
                    <Grid.Row>
                        <Grid.Column>
                            { this.props.children }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export class ActivityView extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.activityId);
        this.props.fetchParticipantList(this.props.activityId);

        this.state = ({similar: {
                            current: "",
                            participants: new Set(),
                            similarParticipants: new Set(),
                            buckets: {} 
                        }
                    });

    }

    setCurrentlySelected(id) {
        console.log(id, " is selected")
        let similar = this.state.similar;
        similar.current = id;
        this.setState({similar: similar});
    }

    render() {
        const itemsPerRow = 10;
        const cardsPerRow = 1;
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
                                       itemsPerRow={ itemsPerRow }
                                       updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }
                                       activityId={ this.props.activityId }
                                       setCurrentlySelected={this.setCurrentlySelected.bind(this)}/>
                        </Grid.Column>
                    )
                )
            )
        };
        console.log(this.props.participants)
        return (
            <div>
                <ParticipantListSidebar participants={ this.props.participants }
                                        updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }
                                        activityId={ this.props.activityId }
                                        setCurrentlySelected={this.setCurrentlySelected.bind(this)}/>
                <ActivityCardViewWrapper>
                    {
                        (this.props.participants.length > 0) &&
                        <FilterMenu activityId={ this.props.activityId }
                                    generateGroupAssignment={ this.props.generateGroupAssignment }/>
                    }
                    <Grid columns={ cardsPerRow }>
                        { getGroupCards(separateIntoGroups(this.props.participants)) }
                    </Grid>
                </ActivityCardViewWrapper>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(ActivityView)
