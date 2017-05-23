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
let input_4_test = 0;
let input_5_test = 0;

class testQuestionView extends React.Component {
    render() {
        return (
            <div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Input style={{paddingRight:10}}
                    label={{color:'purple', content:'Type'}} labelPosition="left" 
                    onChange={(event) => {input_1_test = event.target.value;}} />
                    <Input  label={{color:'purple', content:'Title'}} labelPosition="left"
                    onChange={(event) => {input_2_test = event.target.value;}} />
                </div>
                <div style={{textAlign: 'center', paddingTop:10}} >
                    <Input style={{width:480}}
                    label={{color:'purple', content:'Tooltip'}} labelPosition="left"
                    onChange={(event) => {input_3_test = event.target.value;}} />
                </div>
                <div style={{textAlign: 'center', paddingTop:10}} >
                    <Input style={{width:480}}
                    label={{color:'purple', content:'Filter'}} labelPosition="left"
                    onChange={(event) => {
                                this.props.clearSurveyQuestionAnswersFilters(this.props.type, this.props.title);
                                event.target.value.split(',').map(entry => {
                                    entry.trim().length !== 0
                                    &&
                                    this.props.addSurveyQuestionAnswersFilter(this.props.type, this.props.title, entry.trim())
                                } )
                            }} />
                </div>
                <div style={{textAlign: 'center', paddingTop:10}} >
                    <Input style={{paddingRight:10}}
                    label={{color:'purple', content:'Maximum'}} labelPosition="left" 
                    onChange={(event) => {input_4_test = event.target.value;}} />
                    <Input  label={{color:'purple', content:'Minimum'}} labelPosition="left"
                    onChange={(event) => {input_5_test = event.target.value;}} />
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
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test green huge label"} 
                            onClick={() => this.props.enableSurveyQuestionAnswersMaximum(input_1_test, input_2_test)}>
                    Enable Maximum
                    </Button>
                    <Button className={"ui test red huge label"} 
                            onClick={() => this.props.disableSurveyQuestionAnswersMaximum(input_1_test, input_2_test)}>
                    Disable Maximum 
                    </Button>
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test green huge label"} 
                            onClick={() => this.props.enableSurveyQuestionAnswersMinimum(input_1_test, input_2_test)}>
                    Enable Minimum
                    </Button>
                    <Button className={"ui test red huge label"} 
                            onClick={() => this.props.disableSurveyQuestionAnswersMinimum(input_1_test, input_2_test)}>
                    Disable Minimum 
                    </Button>
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test green huge label"} 
                            onClick={() => this.props.setSurveyQuestionAnswersMaximum(input_1_test, input_2_test, input_4_test)}>
                    Set Maximum
                    </Button>
                    <Button className={"ui test red huge label"} 
                            onClick={() => this.props.setSurveyQuestionAnswersMinimum(input_1_test, input_2_test, input_5_test)}>
                    Set Minimum 
                    </Button>
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test green huge label"} 
                            onClick={() => this.props.enableSurveyQuestionAnswersFilter(input_1_test, input_2_test)}>
                    Enable Filter
                    </Button>
                    <Button className={"ui test red huge label"} 
                            onClick={() => this.props.disableSurveyQuestionAnswersFilter(input_1_test, input_2_test)}>
                    Disable Filter 
                    </Button>
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test green huge label"} 
                            onClick={() => this.props.enableSurveyQuestionAnswersFilterBlacklistMode(input_1_test, input_2_test)}>
                    Enable FilterBlacklistMode
                    </Button>
                    <Button className={"ui test red huge label"} 
                            onClick={() => this.props.disableSurveyQuestionAnswersFilterBlacklistMode(input_1_test, input_2_test)}>
                    Disable FilterBlacklistMode 
                    </Button>
                </div>

            </div>
        );
    }
}


export default testQuestionView;
