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
            <div style={{ overflow: "scroll"}}>
                <Menu vertical fixed={"left"} style={{width: "290px", paddingTop: "55px", height: "100%"}} size={this.props.size}>
                    { this.props.children }
                </Menu>
            </div>
        )
    }
}

export default Sidebar
