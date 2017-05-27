/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Input} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

class SingleInputTextFieldQuestionView extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', paddingTop:30}} >
                <segment style={{textAlign: 'center'}} >
                    <Header as='h1' textAlign='center'>{this.props.title}</Header>
                    <Header as='h4' textAlign='center'>{this.props.tooltip}</Header>
                        <div style={{textAlign: 'center'}}>
                            <Input onChange={(event) => {
                                this.props.clearSurveyQuestionAnswers(this.props.type, this.props.title);
                                this.props.addSurveyQuestionAnswer(this.props.type, this.props.title, event.target.value.trim());
                            }}/>
                        </div>
                </segment> 
           </div>
       );
    }



}


export default SingleInputTextFieldQuestionView;
