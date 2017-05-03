import React from 'react'
import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {view: 'groups'};
        this.toggleView = this.toggleView.bind(this);
    }

    componentWillMount() {
        this.props.fetchGroups();
    }

    toggleView = (view) => {
        this.setState({view: view});
    };

    render() {
        return (
            <div>
                <DashboardSideMenu toggleView={this.toggleView.bind(this)}/>
            </div>
        )
    }
}

export default Dashboard;
