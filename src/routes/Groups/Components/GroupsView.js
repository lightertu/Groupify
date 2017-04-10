/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Icon, Label, Segment, Item, Grid, Image, List, Header, Menu, Button} from 'semantic-ui-react'
import Sticky from 'react-stickynode'

import "./GroupsView.scss"
import GroupCard from "./GroupCard/GroupCard"

const styles = {
    //height: "60%",
    //overflow: "scroll"
}

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

Person.propTypes = {
     isAssigned: React.PropTypes.bool.isRequired,
     name: React.PropTypes.string.isRequired,
     image: React.PropTypes.string.isRequired
}


const people =
    [
        {
            name: "rui tu",
            image: "http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
            isAssigned: true
        },
        {
            name: "rui tu",
            image: "http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
            isAssigned: true
        },
        {
            name: "rui tu",
            image: "http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
            isAssigned: true
        },
    ]

const groups = [
    {
        groupNumber: 1,
        capacity: 8,
        members: people
    },
    {
        groupNumber: 2,
        capacity: 8,
        members: people
    },
    {
        groupNumber: 3,
        capacity: 8,
        members: people
    },
    {
        groupNumber: 4,
        capacity: 8,
        members: people
    },
    {
        groupNumber: 5,
        capacity: 8,
        members: people
    },
    {
        groupNumber: 6,
        capacity: 8,
        members: people
    }
];

export class GroupsView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const peopleListWidth = 6;
        const groupCardsWidth = 10;
        const peopleListTopPadding = 110;

        return (
            <div className="container">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={ peopleListWidth }>
                            <Sticky top={ peopleListTopPadding }>
                                <Segment raised style={ styles } color='teal'>
                                    <Label attached='top'>People</Label>
                                    <List verticalAlign='middle' size="small" selection>
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
                            </Sticky>
                        </Grid.Column>

                        <Grid.Column width={ groupCardsWidth }>
                            {
                                groups.map(
                                    (group) => (
                                        <GroupCard members={ group.members }
                                                   capacity= { group.capacity }
                                                   groupNumber= { group.groupNumber}/>
                                    )
                                )
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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
