/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import { Label, Segment, Grid, Image, List } from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer } from "material-ui"

import "./GroupsView.scss"
import GroupCard from "./GroupCard/GroupCard"

class Person extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <List.Item>
                <Image avatar src={ this.props.image }/>
                <List.Content>
                    <List.Header> { this.props.name } </List.Header>
                </List.Content>
                <List.Content floated="right" verticalAlign="middle">
                    <Label color={ (this.props.isAssigned) ? "green" : "red" }>
                        { (this.props.isAssigned) ? "assigned" : "unassigned"}
                    </Label>
                </List.Content>
            </List.Item>
        )
    }
}

class PeopleListSidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MuiThemeProvider>
                <Drawer
                    docked={ true }
                    open={ true }
                    zDepth={ 1 }
                    style = { drawerStyle }
                    overlayStyle={ drawerStyle }
                >
                    <Segment basic>
                        <List animated verticalAlign='middle' size="large" selection>
                            {
                                people.map((personObj) => (
                                        <Person
                                            name = { personObj.name }
                                            isAssigned = { personObj.isAssigned }
                                            image = { personObj.image }
                                        />
                                    )
                                )
                            }
                        </List>
                    </Segment>
                </Drawer>
            </MuiThemeProvider>
        )
    }

}

Person.propTypes = {
     isAssigned: React.PropTypes.bool.isRequired,
     name: React.PropTypes.string.isRequired,
     image: React.PropTypes.string.isRequired
}

// test
let person =
    {
        name: "rui tu",
        image: "http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
        isAssigned: true
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

const drawerStyle = {
    zIndex: 0
}

export class GroupsView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const peopleListWidth = 4;
        const groupCardsWidth = 12;
        const peopleListTopPadding = 110;

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
            <PeopleListSidebar />
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
