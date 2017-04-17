import React from 'react'
import {Button, Menu } from 'semantic-ui-react'

import './Header.scss'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'};
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;
        return (
                <Menu size='small' attached="top" borderless fixed="top" style={ { height: "4%", zIndex: 1500 }} >
                     <Menu.Item name='Groupify'
                                active={activeItem === 'Groupify'}
                                onClick={this.handleItemClick}
                     />
                     <Menu.Menu position='right'>
                         <Menu.Item>
                             <Button primary>Sign Up</Button>
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
