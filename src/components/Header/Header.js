import React from 'react'
import {Button, Dropdown, Icon, Menu} from 'semantic-ui-react'

import './Header.scss'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'};
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;
        const options = [
            {
                key: 'user',
                text: <span>Signed in as <strong>Michael Young</strong></span>,
                disabled: true,
            },
            { key: 'profile', text: 'Your Profile' },
            { key: 'activities', text: 'Your Activities' },
            { key: 'survey', text: 'Your Survey Forms' },
            { key: 'help', text: 'Help' },
            { key: 'settings', text: 'Settings' },
            { key: 'sign-out', text: 'Sign Out' },
        ];

        return (
                <Menu size='small' attached="top" borderless style={ { height: "55px", zIndex: 1500, position: "relative" }} >
                     <Menu.Item name='Groupify'
                                active={activeItem === 'Groupify'}
                                onClick={this.handleItemClick}
                     />
                     <Menu.Menu position='right'>
                         <Menu.Item>
                             CIS 422 Software Methodology
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
