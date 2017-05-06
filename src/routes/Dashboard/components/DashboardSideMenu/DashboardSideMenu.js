import React from 'react'
import {Image, Button, Icon, Menu, Header, Dimmer} from 'semantic-ui-react'

import SidebarMenu from "../../../../components/SidebarMenu/SidebarMenu";

class _UserProfileSnippet extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleShow = () => this.setState({active: true});
    handleHide = () => this.setState({active: false});

    render() {
        const {active} = this.state;
        const content = (
            <Button size={"mini"}>Upload</Button>
        );

        return (
            <div style={ {textAlign: "center", padding: "24px"} }>
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{active, content}}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    size='small'
                    src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'
                    shape="circular"
                />
                <Header as='h3'>
                    <Header.Content>
                        Michal Young
                        <Header.Subheader>
                            Member since 1900
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            </div>
        );
    }
}

class _MenuOptions extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div>
                <Menu.Item name='Activities' active={activeItem === 'Activities'} onClick={this.handleItemClick}>
                    <Icon name='users'/>
                    Activities
                </Menu.Item>
                <Menu.Item disabled name='Surveys'>
                    <Icon name='file text outline'/>
                    Surveys
                </Menu.Item>
                <Menu.Item name='Account Settings' active={activeItem === 'Account Settings'}
                           onClick={this.handleItemClick}>
                    <Icon name='settings'/>
                    Account Settings
                </Menu.Item>
            </div>
        );
    }
}

class DashboardSideMenu extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <SidebarMenu size="massive">
                <_UserProfileSnippet/>
                <_MenuOptions/>
            </SidebarMenu>
        )
    }
}


export default DashboardSideMenu;
