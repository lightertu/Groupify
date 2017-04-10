/**
 * Created by rui on 4/10/17.
 */
/**
 * Created by rui on 4/7/17.
 */

import React from 'react'
import { Label, Segment, Image, List } from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Drawer } from "material-ui"

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
                    <Label as='a' tag color={ (this.props.groupNumber > 0) ? "green" : "red" }>
                        { (this.props.groupNumber > 0) ? this.props.groupNumber : "unassigned"}
                    </Label>
                </List.Content>
            </List.Item>
        )
    }
}


const peopleListStyle = {
    paddingTop: "23%"
};

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
                >
                    <div style = { peopleListStyle }>
                        <Segment basic>
                            <List animated verticalAlign='middle' size="small" selection>
                                {
                                    this.props.people.map((personObj) => (
                                            <Person
                                                name = { personObj.name }
                                                groupNumber = { personObj.groupNumber }
                                                image = { personObj.image }
                                            />
                                        )
                                    )
                                }
                            </List>
                        </Segment>
                    </div>
                </Drawer>
            </MuiThemeProvider>
        )
    }
}

Person.propTypes = {
    groupNumber: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
}

PeopleListSidebar.propTypes = {
    people: React.PropTypes.array.isRequired,
}

export default PeopleListSidebar
