import React from 'react'
import MenuSideBar from './MenuSideBar';
import View from './View';
import UploadStudents from './UploadStudents';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {view: 'groups'}
        this.toggleView = this.toggleView.bind(this);
        this.UploadStudents = this.UploadStudents.bind(this);
    }

    componentWillMount() {
        this.props.fetchGroups();
    }

    UploadStudents(students) {
        this.props.uploadStudents(students)
    }

    toggleView(view) {
        this.setState({view: view});
    }

    render() {
        let data = [];
        let display = ''
        if(this.state.view == 'groups'){
            if(this.props.counter.results !== undefined) {
                data = this.props.counter.results.map(function(item, i){
                    item.title = "Group: "+i;
                    item.link = "http://localhost:3000/groups/"+item.form;
                    item.icon = "group";
                    item.counting = "Students";
                    item.date = "12/31/2017";
                    item.num = item.students.length;
                    return item
                });
            }
            display = <View data={data}/>

        } else if(this.state.view == 'surveys') {
            if(this.props.counter.results !== undefined) {
                 data = this.props.counter.results.map(function(item, i){
                        item.color = item.color;
                        item.title = "Surveys";
                        item.link = "http://localhost:3000/survey/"+item.form;
                        item.date = "12/31/2017";
                        item.icon = "write";
                        item.num = item.questions.length;
                        item.counting = "Extra Questions"
                        return item
                });
                display = <View data={data}/>
            }
        } else {
            display = <UploadStudents UploadStudents={this.UploadStudents.bind(this)}/>
        }

        return (
            <div className="dashWrapper">
                <MenuSideBar toggleView={this.toggleView.bind(this)}/>
                {display}
            </div>
        )
    }
}

export default Dashboard;
