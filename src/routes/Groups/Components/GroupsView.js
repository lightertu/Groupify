/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Card, Feed} from 'semantic-ui-react'
import {Icon, Label, Segment, Item, Grid, Image} from 'semantic-ui-react'

import PeopleListSidebar from "./PeopleListSidebar"

import GroupCard from "./GroupCard/GroupCard"

export const Groups = (props) => (
    <PeopleListSidebar
        groups={
            <div className="container">
                <div className="container">
                <Grid columns="equal">
                    <Grid.Row>
                        <Grid.Column>
                            <GroupCard/>
                        </Grid.Column>

                        <Grid.Column>
                            <GroupCard/>
                        </Grid.Column>

                        <Grid.Column>
                            <GroupCard/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </div>
        }
    />
)


Groups.propTypes = {

    /*
     counter: React.PropTypes.number.isRequired,
     doubleAsync: React.PropTypes.func.isRequired,
     increment: React.PropTypes.func.isRequired
     */
}

export default Groups
