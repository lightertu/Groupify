/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Input, Checkbox, Dropdown} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

import jwt from 'jsonwebtoken';
import axios from 'axios'
import setAuthorizationToken from '../../../../../components/utils/setAuthorizationToken';
import { setCurrentUser } from "../../../../../routes/Login/modules/actions/authActions"

const SERVER_URL = "http://"+window.location.host;

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
                    <Dropdown style={{marginLeft:0}} placeholder='Type' search selection 
                options={[
                    { key: 'CircleSelection', value: 'CircleSelection', text: 'Circle Selection' },
                    { key: 'MultiInputTextField', value: 'MultiInputTextField', text: 'Multiple Answer Text Field' },
                    { key: 'SingleInputTextField', value: 'SingleInputTextField', text: 'Single Answer Text Field' },
                    { key: 'test', value: 'test', text: 'test' },
                ]} onChange={(event, data) => {input_1_test = data.value; console.log(input_1_test);}}/>

            </div>

            <div style={{textAlign: 'center', paddingTop:10}} >
                <Input  label={{color:'purple', content:'Title'}} labelPosition="left"
                onChange={(event) => {input_2_test = event.target.value;}} />
            </div>

            <div style={{textAlign: 'center', paddingTop:10}} >
                <Input style={{width:480}}
                label={{color:'purple', content:'Tooltip'}} labelPosition="left"
                onChange={(event) => {input_3_test = event.target.value;}} />
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

                <div style={{textAlign: 'center', paddingTop:10}} >
                    <Input style={{marginRight:10}}
                    label={{color:'purple', content:'Answers Maximum Limit:'}} disabled={!this.props.answersEnableMaximum} labelPosition="left"
                    onChange={(event) => {this.props.setSurveyQuestionAnswersMaximum(input_1_test, input_2_test, event.target.value);}} />
                    <Checkbox toggle label={this.props.answersEnableMaximum ? 'Enabled' : 'Disabled'} onChange={() => { 
                        (this.props.answersEnableMaximum) ?
                        this.props.disableSurveyQuestionAnswersMaximum(input_1_test, input_2_test)
                        :    
                        this.props.enableSurveyQuestionAnswersMaximum(input_1_test, input_2_test)
                    }}          
                    checked={this.props.answersEnableMaximum} />
                </div>          
                           
                <div style={{textAlign: 'center', paddingTop:10}} >
                    <Input style={{marginRight:10}}
                    label={{color:'purple', content:'Answers Minimum Limit:'}} disabled={!this.props.answersEnableMinimum} labelPosition="left"  
                    onChange={(event) => {this.props.setSurveyQuestionAnswersMinimum(input_1_test, input_2_test, event.target.value);}} />
                    <Checkbox toggle label={this.props.answersEnableMinimum ? 'Enabled' : 'Disabled'} onChange={() => {  
                        (this.props.answersEnableMinimum) ?
                        this.props.disableSurveyQuestionAnswersMinimum(input_1_test, input_2_test)
                        :
                        this.props.enableSurveyQuestionAnswersMinimum(input_1_test, input_2_test)
                    }}
                    checked={this.props.answersEnableMinimum} />
                </div>
            <div style={{textAlign: 'center', paddingTop:10, marginRight:10}} >
                <Input style={{width:400}}
                disabled={!this.props.answersEnableFilter}
                label={{color:'purple', content:'Filter'}} labelPosition="left"
                onChange={(event) => {
                            this.props.clearSurveyQuestionAnswersFilters(this.props.type, this.props.title);
                            event.target.value.split(',').map(entry => {
                                entry.trim().length !== 0
                                &&
                                this.props.addSurveyQuestionAnswersFilter(this.props.type, this.props.title, entry.trim())
                            } )
                        }} />
                    <Checkbox style={{marginRight: 10, marginLeft:10}} toggle label={this.props.answersEnableFilter ? 'Enabled' : 'Disabled'} onChange={() => {
                        (this.props.answersEnableFilter) ?
                        this.props.disableSurveyQuestionAnswersFilter(input_1_test, input_2_test)
                        :
                        this.props.enableSurveyQuestionAnswersFilter(input_1_test, input_2_test)
                    }}
                    checked={this.props.answersEnableFilter} />
                    <Checkbox toggle disabled={!this.props.answersEnableFilter}
                    label={(this.props.answersFilterEnableBlacklistMode) ? ('Blacklist Mode') : ('Whitelist Mode')} onChange={() => {
                        (this.props.answersFilterEnableBlacklistMode) ?
                        this.props.disableSurveyQuestionAnswersFilterBlacklistMode(input_1_test, input_2_test)
                        :
                        this.props.enableSurveyQuestionAnswersFilterBlacklistMode(input_1_test, input_2_test)
                    }}
                    checked={this.props.answersEnableFilterBlacklistMode} />
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Button className={"ui test purple huge label"} 
                            onClick={() => {                            
                        
                                axios.defaults.headers.common['Authorization'] = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTI0MDcwMDg5ODhhYjQ0NGFlZjk4ZWYiLCJpYXQiOjE0OTU1MzM0NjUsImV4cCI6MTIwMDE0OTU1MzM0NjV9.ubyLJc9QDcIW7seSdZATLTBh1TYkELbdr9CD7sQTvzw";
                                let url = "http://"+SERVER_URL+"/api/surveys";
                                    axios.post(url, this.props.survey)
                                .then((response) => {
                                    console.log(response);
                                })
                                .catch((error) => {
                                    console.log(error)
                                });
                           }}>
                    Send Survey to back end
                    </Button>
                </div>
                <div style={{textAlign: 'center', paddingTop:30}} >
                    <Label color={'black'} size={'massive'}>
                       Preview 
                    </Label>
                </div>

            </div>
        );
    }
}


export default testQuestionView;
