/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import { Input, Label, Segment, Grid, Image, List } from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Drawer } from "material-ui"
import Sticky from "react-stickynode"

import PeopleListSidebar from "./PeopleListSidebar"

import "./GroupsView.scss"
import GroupCard from "./GroupCard/GroupCard"


// test
let person =
    {
        name: "rui tu",
        image: "http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
        groupNumber: -1
    }
let people = [ ]

for (let i = 0; i < 20; i++ ) {
    people.push( person )
}

let groups = [ ]
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
for (let i = 0; i < 19; i++ ) {
    groups.push( { groupNumber: 1, capacity: 8, members: people.slice(0, getRandomArbitrary(0, 10)) } )
}


export class GroupsView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const peopleListWidth = 4;
        const groupCardsWidth = 12;

        let getGroups = (groups) => {
            return (
                groups.map(
                    (group) => (
                        <Grid.Column>
                        <GroupCard members={ group.members }
                           capacity= { group.capacity }
                           groupNumber= { group.groupNumber}/>
                        </Grid.Column>
                    )
                )
            )
        }

        return (
            <div>
            <PeopleListSidebar people={ people } />
                <div className="container">
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={ peopleListWidth }>
                            </Grid.Column>
                            <Grid.Column width={ groupCardsWidth }>
                                <Grid columns={ 2 }>
                                    { getGroups(groups) }
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}


GroupsView.propTypes = {
    /*
    people: React.PropTypes.array.isRequired,
    groups: React.PropTypes.array.isRequired
    */
}

export default GroupsView
