/**
 * Created by rui on 4/10/17.
 */
/**
 * Created by rui on 4/7/17.
 */

import React from 'react'
import { Segment, Image, List, Icon, Popup } from 'semantic-ui-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Drawer } from "material-ui"

import MemberProfilePopup from "../MemberProfilePopup";

class Person extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <MemberProfilePopup
          position="right center"
          offset={ 20 }
          hoverable
          trigger={
              <List.Item>
                  <Image size="mini" shape="rounded" verticalAlign="middle" src={ this.props.image }/>
                  <List.Content>
                      <List.Header> { this.props.name } </List.Header>
                  </List.Content>
                  <List.Content floated="right" verticalAlign="middle" style= { {paddingTop: "5%"}}>
                    { (this.props.groupNumber > 0) ? <Icon name="check" color="green"/> : <div>&nbsp;</div>}
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
        return (
            <MuiThemeProvider>
                <Drawer
                    docked={ true }
                    open={ true }
                    zDepth={ 1 }
                    overlayStyle={ { zIndex: -1 } }
                >
                    <div style = { peopleListStyle }>
                        <Segment basic>
                            <List verticalAlign='middle' size="small" selection animated>
                            {
                                this.props.people.map((personObj) => (
                                    <Person
                                        name = { personObj.name }
                                        groupNumber = { personObj.groupNumber }
                                        image = { personObj.image }
                                    />
                                ))
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
};

PeopleListSidebar.propTypes = {
    people: React.PropTypes.array.isRequired,
};

export default PeopleListSidebar
