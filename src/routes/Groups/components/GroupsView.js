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


let numOfPeople = 60,
    numOfGroups = 10;

let fakeUsers = generateUsers(numOfGroups, numOfPeople);

export class GroupsView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const peopleListWidth = 4;
        const groupCardsWidth = 12;

        let separateIntoGroups = () => {
            let groups = [];
            for (let i = 0; i < numOfGroups; i++) {
                let newGroup = {};
                newGroup.capacity = Math.round(numOfPeople / numOfGroups);
                newGroup.groupNumber = i;
                newGroup.members = [];
                groups.push(newGroup);
            }

            for (let i = 0; i < numOfPeople; i++) {
                if (fakeUsers[i].groupNumber >= 0 && fakeUsers[i].groupNumber < numOfPeople) {
                    groups[fakeUsers[i].groupNumber].members.push(fakeUsers[i]);
                } else if (fakeUsers[i].groupNumber >= numOfPeople) {
                    alert("user " + fakeUsers[i].name + "has group number: " + fakeUsers[i].groupNumber + " which is out of bound " );
                }
            }

            return groups;
        };

        let getGroupCards = (groups) => {
            return (
                groups.map(
                    (group) => (
                        <Grid.Column stretched>
                            <GroupCard members={ group.members }
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
                <ParticipantListSidebar people={ fakeUsers }/>
                <div className="" style={ {marginTop: "2%", marginLeft: "5%"} }>
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={ peopleListWidth }>
                            </Grid.Column>
                            <Grid.Column width={ groupCardsWidth }>
                                <Grid columns={ 1 }>
                                    { getGroupCards(separateIntoGroups()) }
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
