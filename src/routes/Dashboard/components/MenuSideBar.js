import React from 'react'

class MenuSideBar extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        var menuStyle = {
            paddingTop: 55,
            marginRight: 100
        };

        var menuContentStyle = {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            textAlign: "center"
        };

        return (
            <div>
                <div className="ui visible left vertical sidebar menu" style={menuStyle} >
        
                <img className="ui centered small circular bordered image" src="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
                <div className="menu content" style={menuContentStyle}>
                    <a className="header">Michael</a>
                    <div className="meta">
                      <span className="date">Joined in 2016</span>
                    </div>
                    <div className="description">

                    </div>
                </div>

                <a className="item">
                  <i className="group icon"></i>
                  Groups
                </a>
                <a className="item">
                  <i className="write icon"></i>
                  Survey
                </a>
                <a className="item">
                  <i className="cloud icon"></i>
                  Data
                </a>
                <a className="item">
                  <i className="calendar icon"></i>
                  History
                </a>
              </div>
            </div>
        )
    }
}

export default MenuSideBar;
