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

    render() {
        let survey;
        
        if(this.props.counter['confirmation'] == 'success') {
            survey = <CreateForm id={this.props.params.id}/>
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
