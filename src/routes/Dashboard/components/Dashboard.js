import React from 'react'
import MenuSideBar from './MenuSideBar';
import View from './View';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {groups: true}
    }

    componentWillMount() {
        this.props.fetchGroups();
    }


    toggleView = () => this.setState({ groups: !this.state.groups })

    render() {
        let data = [];
        if(this.state.groups){
            if(this.props.counter.results !== undefined) {
                data = this.props.counter.results.map(function(item, i){
                    item.title = "Group: "+i,
                    item.link = "http://localhost:3000/groups/"+item.form,
                    item.icon = "group",
                    item.counting = "Students",
                    item.date = "12/31/2017",
                    item.num = item.students.length
                    return item
                });
            }
        } else {
             for (let i = 0; i < 10; i++) {
                    let card = {};
                    card.color = "red";
                    card.title = "Surveys";
                    card.link = "http://localhost:3000/groups";
                    card.date = "12/31/2017"
                    card.icon = "write"
                    card.num = "22"
                    data.push(card);
                }
        }
        return (
            <div className="">
                <MenuSideBar toggleView={this.toggleView.bind(this)}/>
                <View data={data}/> 
            </div>
        )
    }
}

export default Dashboard;
