import React from 'react'
import {Grid, Card, Label} from 'semantic-ui-react'
import CreateForm from './CreateForm';

class Survey extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        this.props.fetchSurvey(this.props.params.id);
    }

    handleFormSubmit(data) {
        console.log("Submitting survey...")
        var obj = {}
        obj['students'] = []
        obj['students'].push(data)
        this.props.generateSurvey(this.props.params.id, obj);
    }

    render() {
        let survey;
        if(this.props.counter['confirmation'] == 'success') {
            survey = <CreateForm handleFormSubmit={this.handleFormSubmit.bind(this)} id={this.props.params.id} questions={this.props.counter.result}/>
        } else {
            survey = <h1>Sorry there is no survey here</h1>
        }

        return (
            <div>
                {survey}
            </div>
        )
    }
}

export default Survey;
