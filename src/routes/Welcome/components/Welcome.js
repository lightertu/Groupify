import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { Button, Form, Header } from 'semantic-ui-react'
import CreateForm from './CreateForm';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {visible:false, link:''};
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.generateSurvey = this.generateSurvey.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.createStudents = this.createStudents.bind(this);
    }

    componentWillMount() {
        this.props.fetchStudents();
    }

    componentDidMount() {
        this.information = setInterval(
      () => this.getData(),
      5000
    );
    }

    getData() {
        this.props.fetchStudents();
    }

    createStudents(students) {
        this.props.createStudents(students);
    }

    generateSurvey(data) {
        console.log(data.students)
        this.props.createStudents(data.students);
        this.props.generateSurvey(this.state.link, data);
    }

    handleForm() {
          var link = this.makeid();
          this.setState({ visible: !this.state.visible, link: link })
    }

    toggleVisibility() {
        this.setState({ visible: !this.state.visible})
    } 

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(var i=0; i < 25; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    render() {

        const { visible } = this.state
        let form;

        if(visible) {
            form = <CreateForm active={visible} key="key" link={"http://localhost:3000/survey/"+this.state.link} 
                toggleVisibility={this.toggleVisibility.bind(this)} 
                generateSurvey={this.generateSurvey.bind(this)} 
                createStudents={this.createStudents.bind(this)}
                groups={this.props.counter.welcome.results}/>
        }

        let wrapper = {
            marginTop: 75,
            fontSize: 75
        }

        let headerStyle = {
            weight: 'bold',
            color: '#155484',
            fontFamily: 'Mosk-Ultra-Boldimport'

        }

        let innerStyle = {
            display: 'inline',
            fontSize: 55,
            weight: 'thin',
            textDecoration: 'underline',
            color: '#2185D0'
        }

        let rowStyle = {
            marginTop: 75
        }

        return (

            <div className="container text-center">
                <div style={wrapper}>
                    <span><Header size='large' style={headerStyle}>WELCOME <div className="inner" style={innerStyle}><i>to </i>Team Divider...</div></Header></span>
                </div>
                <Header.Subheader as='h2'><i>If this is your first time start by generating a form.</i></Header.Subheader>
                <br />
                <br />
                <div style={rowStyle}>
                <div className="ui stackable two column centered grid">
                    <div className="column">
                    <div className="welcome-button-left">
                    <Button onClick={this.handleForm} className={"massive ui labeled icon blue button button " }>
                        <i className="download icon"></i>
                        Generate Form
                    </Button>
                    </div>
                    </div>

                    <div className="column">
                    <div className="welcome-button-right">
                    <a href="/dashboard"><Button className="massive ui labeled icon blue button">
                        <i className="dashboard icon"></i>
                        Dashboard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Button></a>
                    </div>
                    </div>
                </div>
                <br />
                <br />

                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {form}
                </CSSTransitionGroup>
                </div>
  
            </div>
        )
    }
}

export default Welcome