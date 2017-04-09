/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Card, Feed} from 'semantic-ui-react'
import {Icon, Label, Segment, Item, Grid, Image, List, Header} from 'semantic-ui-react'
import Sticky from 'react-stickynode'

import "./GroupsView.scss"
import GroupCard from "./GroupCard/GroupCard"

const styles= {
    position: "fixed",
    height: "60%",
    overflow: "scroll"
}

/*
*/
export const Groups = (props) => (
    <div className="container">
        <Grid>
            <Grid.Row>
                    <Grid.Column width = { 6 }>
                        <Segment style={ styles }>
                            <Header as='h3' textAlign='center'>
                                <Header.Content>
                                    People
                                </Header.Content>
                            </Header>
                            <List divided verticalAlign='middle' size="massive" selection>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Christian Rui</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                                    <List.Content>
                                        <List.Header>Daniel someone</List.Header>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>

                <Grid.Column width={ 10 } >
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
)


Groups.propTypes = {

    /*
     counter: React.PropTypes.number.isRequired,
     doubleAsync: React.PropTypes.func.isRequired,
     increment: React.PropTypes.func.isRequired
     */
}

export default Groups
