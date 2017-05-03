import React from 'react'
import PropTypes from 'prop-types';
import {Button, Dropdown, Icon, Menu} from 'semantic-ui-react'

class Sidebar extends React.Component {
    constructor() {
        super();
    }

    static PropTypes = {
        size: PropTypes.string
    };

    render() {
        return (
            <Menu vertical fixed={"left"} style={{width: "290px", paddingTop: "55px"}} size={this.props.size}>
                { this.props.children }
            </Menu>
        )
    }
}

export default Sidebar
