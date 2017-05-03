import React from 'react'
import {Button, Dropdown, Icon, Menu} from 'semantic-ui-react'

class Sidebar extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <Menu vertical fixed={"left"} style={{width: "250px", paddingTop: "55px"}}>
                { this.props.children }
            </Menu>
        )
    }
}

export default Sidebar
