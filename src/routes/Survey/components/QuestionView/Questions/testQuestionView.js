/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Input} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

let input_1_test = "";
let input_2_test = "";
let input_3_test = "";

class testQuestionView extends React.Component {
    render() {
        return (
            <div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Input onChange={(event) => {input_1_test = event.target.value;}} />
                    <Input onChange={(event) => {input_2_test = event.target.value;}} />
                    <Input onChange={(event) => {input_3_test = event.target.value;}} />
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test green huge label"} 
                            onClick={() => this.props.createSurveyQuestion(input_1_test, input_2_test, input_3_test)}>
                    Create
                    </Button>
                    <Button className={"ui test red huge label"} 
                            onClick={() => this.props.deleteSurveyQuestion(input_1_test, input_2_test)}>
                    Delete 
                    </Button>
                </div>
            </div>
        );
    }
}


export default testQuestionView;
