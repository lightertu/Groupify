/**
 * Created by rui on 4/6/17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Drawer
                    docked={ false }
                    width={ 300 }
                    open={ this.props.open }
                    onRequestChange = { this.props.toggle }
                >
                    <MenuItem onTouchTap= { this.props.toggle }>Menu Item</MenuItem>
                    <MenuItem onTouchTap= { this.props.toggle }>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}