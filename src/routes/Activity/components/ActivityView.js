/**
 * Created by rui on 4/7/17.
 * Additions made by Joseph 5/28/17
 */
import React from 'react'
import {Grid, Segment, Button} from 'semantic-ui-react'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ParticipantListSidebar from "./ParticipantListSidebar"

import {Map, List, Set} from 'immutable';

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
    }

    componentWillMount() {
        this.props.fetchParticipantList(this.props.activityId);
    }
    render (){  
        const itemsPerRow = 10;
        const cardsPerRow = 1;
        let numOfGroups = this.props.totalCapacity / this.props.groupCapacity;
        
        let separateParticipantsIntoGroups = () => {
            let groups = [];
            for (let i = 0; i < numOfGroups; i++) {
                groups.push({
                    groupNumber: i,
                    participants: []
                })
            }
            this.props.participants.forEach((participant) => {
                let participantGroupNumber = participant.get('groupNumber');
                if (participantGroupNumber >= 0 && participantGroupNumber < numOfGroups) {
                    groups[participantGroupNumber].participants.push(participant);
                }
            });

            return groups;
        };

        let getGroupCards = (groups) => {
            return (
                groups.map(
                    (group, i) => (
                        <Grid.Column stretched key={ group.groupNumber }>
                            <GroupCard participants={ group.participants }
                                       key = {"GC_" + i}
                                       isLocked = {this.props.lockedGroups.has(i)}
                                       capacity={ this.props.groupCapacity }
                                       groupNumber={ group.groupNumber }
                                       filter={this.props.filter}
                                       itemsPerRow={ itemsPerRow }
                                       updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }
                                       activityId={ this.props.activityId }
                                       setCurrentlySelected={(v) => console.log(v) }
                                       group={ i }
                                       toggleLock={this.props.toggleLock}
                            />
                        </Grid.Column>
                    )
                )
            )
        };
        return (
            <div>
                <ParticipantListSidebar 
                        key={"ParticipantListSidebar_" + this.props.participants.size}
                        participants={ this.props.participants }
                        setCurrentlySelected={(v) => {console.log(v)}}
                        updateParticipantGroupNumber={ this.props.updateParticipantGroupNumber }
                        filter={this.props.filter}
                        activityId={ this.props.activityId }
                />
                <ActivityCardViewWrapper setCurrentlySelected={(v) => console.log(v) }>
                {
                    (this.props.participants.size > 0) &&
                    <FilterMenu activityId={ this.props.activityId }
                                isRunningAlgorithm = {this.props.isRunningAlgorithm}
                                allAnswers={this.props.allAnswers}
                                filter={this.props.filter}
                                generateGroupAssignment={ this.props.generateGroupAssignment }
                                setFilter={ this.props.setFilter}/>
                }
                <Grid columns={ cardsPerRow }>
                    { getGroupCards(separateParticipantsIntoGroups()) }
                </Grid>
                </ActivityCardViewWrapper>
            </div>        
        )
    }
}

export default DragDropContext(HTML5Backend)(ActivityView)
