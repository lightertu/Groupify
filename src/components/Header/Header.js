import React from 'react'
import { withRouter } from 'react-router';
import {Button, Dropdown, Icon, Menu} from 'semantic-ui-react'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'};
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;
        const options = [
            { key: 'profile', text: 'Your Profile' },
            { key: 'activities', text: 'Activites ', src: '/activities' },
            { key: 'dashboard', text: 'Dashboard', src: '/dashboard'},
            { key: 'survey', text: 'Your Survey Forms' , src: '/surveys'},
            { key: 'help', text: 'Help' },
            { key: 'settings', text: 'Settings' },
            { key: 'sign-out', text: 'Sign Out' },
        ];

        let menuItems = options.map((op) => {
            return <Dropdown.Item><a href={op.src}>{op.text}</a></Dropdown.Item>;
        });
        console.log(this.state.activeItem)

        return (
                <Menu size='small' attached="top" fixed="top" borderless style={ { height: "55px", zIndex: 1500 }} >
                     <Menu.Item name='Team Divider'
                                active={activeItem === 'Team Divider'}
                                onClick={this.handleItemClick}
                     />
                     <Menu.Menu position='right'>
                         <Menu.Item>
                             <Dropdown as={"a"} trigger={
                                 <span>
                                    <Icon name='user' size={"large"} color={"grey"}/>
                                 </span>
                             }>
                                <Dropdown.Menu>
                                    <Dropdown.Item disabled={true}><span>Signed in as <strong>Michael Young</strong></span></Dropdown.Item>
                                    {menuItems}
                                </Dropdown.Menu>
                             </Dropdown>


                         </Menu.Item>
                     </Menu.Menu>
                </Menu>
        )
    }
}

/*
 export const Header = () => (
 <div>
 <h1>React Redux cool Kit</h1>
 <IndexLink to='/' activeClassName='route--active'>
 Home
 </IndexLink>
 {' · '}
 <Link to='/counter' activeClassName='route--active'>
 Counter
 </Link>
 </div>
 )
 */


export default Header
