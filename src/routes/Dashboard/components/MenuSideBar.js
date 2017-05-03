import React from 'react'
import { Card, Label, Segment, Image, Button, Icon, Menu } from 'semantic-ui-react'

class MenuSideBar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    toggleView(view, e) {
        e.preventDefault();
        this.props.toggleView(view);
    }

    render() {
        let menuStyle = {
            paddingTop: 75

        };

        let menuContentStyle = {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            textAlign: "center"
        };

        return (
            <div>
                <div className="ui visible left vertical sidebar menu" style={menuStyle} >
                <Image centered={true} size={'small'} bordered={true} shape={'circular'} src="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
                <div className="menu content" style={menuContentStyle}>
                    <a className="header">Michael</a>
                    <div className="meta">
                      <span className="date">Joined in 2016</span>
                    </div>
                    <div className="description">

                    </div>
                </div>

                <a className="item" href="#" onClick={this.toggleView.bind(this, 'groups')}>
                  <Icon name="group"></Icon>
                  Groups
                </a>
                <a className="item" href="#" onClick={this.toggleView.bind(this, 'surveys')}>
                  <Icon name="write"></Icon>
                  Survey
                </a>
                 <a className="item" href="#" onClick={this.toggleView.bind(this, 'upload')}>
                  <Icon name="upload"></Icon>
                  Upload users
                </a>
                <a className="item">
                  <Icon name="cloud"></Icon>
                  Data
                </a>
                <a className="item">
                  <Icon name="calendar"></Icon>
                  History
                </a>
              </div>
            </div>
        )
    }
}

export default MenuSideBar;
