import React from 'react'
import { IndexLink, Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import SideMenu from './SideMenu'
import './Header.scss'

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

class Header extends  React.Component {
    constructor() {
        super();
        this.state = { sideMenuOpen: false };
    }

    sideMenuToggle = () => {
        this.setState( { sideMenuOpen: !this.state.sideMenuOpen } );
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Team Divider"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={ this.sideMenuToggle }
                />
                <Link to='/counter' activeClassName='route--active'>
                    Counter
                </Link>
                <SideMenu open = { this.state.sideMenuOpen } toggle = { this.sideMenuToggle } />
            </div>
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
