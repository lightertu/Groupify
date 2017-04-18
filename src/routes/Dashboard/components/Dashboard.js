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
        if(this.state.groups){
            for (let i = 0; i < 10; i++) {
                    let card = {};
                    card.color = "blue";
                    card.title = "Groups";
                    card.link = "http://localhost:3000/groups";
                    card.date = "01/01/2016"
                    card.icon = "group"
                    data.push(card);
                }
        } else {
             for (let i = 0; i < 10; i++) {
                    let card = {};
                    card.color = "red";
                    card.title = "Surveys";
                    card.link = "http://localhost:3000/groups";
                    card.date = "12/31/2017"
                    card.icon = "write"
                    data.push(card);
                }
        }
        console.log(this.state.groups);
        return (
            <div className="">
                <MenuSideBar toggleView={this.toggleView.bind(this)}/>
                <View data={data}/> 
            </div>
        )
    }
}

export default Dashboard;
