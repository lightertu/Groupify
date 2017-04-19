import React from 'react'
import {Grid, Card, Label} from 'semantic-ui-react'

class Survey extends React.Component {
    constructor() {
        super();
        this.state = {}
    }



    render() {
        return (
            <div>
                <Label>This is Form: {this.props.params.id}</Label>
            </div>
        )
    }
}

export default Survey;
