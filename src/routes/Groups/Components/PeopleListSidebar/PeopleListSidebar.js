/**
 * Created by rui on 4/10/17.
 */
/**
 * Created by rui on 4/7/17.
 */

import React from 'react'
import {Segment, Image, List, Icon, Button, Header} from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Drawer} from "material-ui"
import PropTypes from "prop-types"
import MemberProfilePopup from "../MemberProfilePopup";

class Person extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MemberProfilePopup
                name={ this.props.name }
                image={ this.props.image }
                groupNumber={ this.props.groupNumber }
                skills={ this.props.skills }
                availability={ this.props.availability }
                position="right center"
                offset={ 20 }
                hoverable
                trigger={
                    <List.Item>
                        <Image size="mini" shape="rounded" verticalAlign="middle" src={ this.props.image }/>
                        <List.Content>
                            <List.Header> { this.props.name } </List.Header>
                        </List.Content>
                        <List.Content floated="right" verticalAlign="middle" style={ {paddingTop: "5%"}}>
                            { (this.props.groupNumber >= 0) ? <Icon name="check" color="green"/> : <div>&nbsp;</div>}
                        </List.Content>
                    </List.Item>
                }
            />
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

        let getUngroupedNumber = (members) => (
            members.filter((personObj) => (
                personObj.groupNumber < 0
            )).length
        );

        let generateSidebarList = (members) => (
            <List verticalAlign='middle' size="small" selection animated>
                {
                    members.filter((personObj) => (
                        personObj.groupNumber < 0
                    ))

                    .map((personObj) => (
                        <Person
                            name={ personObj.name }
                            image={ personObj.image }
                            groupNumber={ personObj.groupNumber }
                            skills={ personObj.skills }
                            availability={ personObj.availability }
                        />
                    ))
                }
            </List>
        );

        let generateEmailButtom = () => (
            <div style={ {paddingTop: "200%", textAlign: "center"} }>
                <Header as='h2'>
                    All Grouped!
                    <Header.Subheader>
                        Next step is to notify all the students
                    </Header.Subheader>
                </Header>
                <Button color='green'>Send Out Email</Button>
            </div>
        );

        return (
            <MuiThemeProvider>
                <Drawer
                    docked={ true }
                    open={ true }
                    zDepth={ 1 }
                    containerStyle={ {backgroundColor: "#F6F7F9"} }
                >
                    <div style={ peopleListStyle }>
                        <Segment basic>
                            {
                                (getUngroupedNumber(this.props.people)) ?
                                    generateSidebarList(this.props.people) :
                                    generateEmailButtom()
                            }
                        </Segment>
                    </div>
                </Drawer>
            </MuiThemeProvider>
        )
    }
}

/*
 */
Person.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    groupNumber: PropTypes.number.isRequired,
    availability: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
};

PeopleListSidebar.propTypes = {
    people: PropTypes.array.isRequired
};

export default PeopleListSidebar
