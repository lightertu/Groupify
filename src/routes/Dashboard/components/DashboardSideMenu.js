import React from 'react'
import {Card, Label, Segment, Image, Button, Icon, Menu, Header, Dimmer} from 'semantic-ui-react'
import SidebarMenu from "../../../components/SidebarMenu/SidebarMenu";


class MenuSideBar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    toggleView(view, e) {
        e.preventDefault();
        this.props.toggleView(view);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleShow = () => this.setState({ active: true });
    handleHide = () => this.setState({ active: false });
    render() {
        const { activeItem } = this.state;
        const { active } = this.state;
        const content = (
            <div>
                <Button size={"mini"}>Upload</Button>
            </div>
        );
        return (

            <SidebarMenu>
                <div style={ { textAlign: "center", padding: "24px"} }>
                    <Dimmer.Dimmable
                        as={Image}
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        size='small'
                        src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png'
                        shape="circular"
                    />
                    <Header as='h3'>
                        <Header.Content>
                            Michal Young
                            <Header.Subheader>
                                Joined since 1900
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                </div>
                <Menu.Item name='Activities' active={activeItem === 'Activities'} onClick={this.handleItemClick}>
                    <Icon name='users' />
                    Activities
                </Menu.Item>
                <Menu.Item name='Surveys' active={activeItem === 'Surveys'} onClick={this.handleItemClick}>
                    <Icon name='file text outline' />
                    Surveys
                </Menu.Item>
            </SidebarMenu>
        )
    }
}

export default MenuSideBar;
