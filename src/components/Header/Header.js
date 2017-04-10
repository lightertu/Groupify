import React from 'react'
import {IndexLink, Link} from 'react-router'
import {Button, Menu} from 'semantic-ui-react'
import Sticky from 'react-stickynode'

import './Header.scss'
function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

class Header extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'};
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Sticky enabled = { true } innerZ={ 1000000000 }>
                <Menu size='massive'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Sticky>
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
