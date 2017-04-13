/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import { Grid } from 'semantic-ui-react'

import PeopleListSidebar from "./PeopleListSidebar"

import "./GroupsView.scss"
import GroupCard from "./GroupCard/GroupCard"

// test
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let person =
    {
        name: "yooo tu",
        image: "http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg",
        groupNumber: -1
    }
let people = [ ]

for (let i = 0; i < 40; i++ ) {
    let newPerson = Object.assign({}, person);
    newPerson.groupNumber = getRandomArbitrary(-4, 18);
    people.push( newPerson )
}


let groups = [ ]

for (let i = 0; i < 19; i++ ) {
    groups.push( { groupNumber: i, capacity: 8, members: people.slice(0, getRandomArbitrary(0, 10)) } )
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
                <div className="" style = { { marginTop: "-9%", marginLeft: "5%"} }>
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


GroupsView.propTypes = { /*
    people: React.PropTypes.array.isRequired,
    groups: React.PropTypes.array.isRequired
    */
};

export default GroupsView
