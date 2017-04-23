import React from 'react'

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
        var menuStyle = {
            paddingTop: 75,
            paddingRight: 0,
            float: 'left'

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

                <a className="item" href="#" onClick={this.toggleView.bind(this, 'groups')}>
                  <i className="group icon"></i>
                  Groups
                </a>
                <a className="item" href="#" onClick={this.toggleView.bind(this, 'surveys')}>
                  <i className="write icon"></i>
                  Survey
                </a>
                 <a className="item" href="#" onClick={this.toggleView.bind(this, 'upload')}>
                  <i className="upload icon"></i>
                  Upload users
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
