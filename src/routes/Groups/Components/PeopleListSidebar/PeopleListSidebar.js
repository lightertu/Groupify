/**
 * Created by rui on 4/8/17.
 */

import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, List, Item } from 'semantic-ui-react'

class PeopleListSidebar extends Component {
    state = { visible: false }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div>
                <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                <Sidebar.Pushable>
                    <Sidebar
                        animation='scale down'
                        width='thin'
                        direction='left'
                        visible={visible}
                    >
                    </Sidebar>
                    <Sidebar.Pusher>
                        { this.props.groups }
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

/*
<List selection divided>
    <List.Item>
        <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/helen.jpg' />
        <List.Content>
            <List.Header>Helen</List.Header>
        </List.Content>
    </List.Item>
    <List.Item>
        <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/christian.jpg' />
        <List.Content>
            <List.Header>Christian</List.Header>
        </List.Content>
    </List.Item>
    <List.Item>
        <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
        <List.Content>
            <List.Header>Daniel</List.Header>
        </List.Content>
    </List.Item>
</List>
*/
export default PeopleListSidebar


