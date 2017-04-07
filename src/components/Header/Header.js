import React from 'react'
import { IndexLink, Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import './Header.scss'

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const Header = () => (
    <div>
        <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={
                <IndexLink to='/' activeClassName='route--active'>
                    <FlatButton label="Home" />
                </IndexLink>
            }
        />
        <Link to='/counter' activeClassName='route--active'>
            Counter
        </Link>
    </div>
);

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
