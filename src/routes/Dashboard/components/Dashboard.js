import React from 'react'
import MenuSideBar from './MenuSideBar';
import View from './View';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {groups: true}
    }

    toggleView = () => this.setState({ groups: !this.state.groups })

    render() {
        let data = [];
        for (let i = 0; i < 10; i++) {
                let card = {};
                card.color = "blue";
                card.title = "test";
                data.push(card);
            }

        return (
            <div class="ui bottom attached segment pushable">
                <MenuSideBar toggleView={this.toggleView.bind(this)}/>
                <View data={data}/> 
            </div>
        )
    }
}

export default Dashboard;
