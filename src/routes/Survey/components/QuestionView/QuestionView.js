/**
 * Created by Matt on 05/08/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Label, Header, Segment} from 'semantic-ui-react';
import {Map, List} from 'immutable';
import * as Questions from './Questions'

class QuestionView extends React.Component {
    render() {
        const  Question = Questions[this.props.type + "QuestionView"];
        return (Question) ?
        (
            <Segment vertical>
                <Question
                    isSubmitting= {this.props.isSubmitting}
                    type={this.props.type} 
                    title={this.props.title} 
                    tooltip={this.props.tooltip} 
                    answers={this.props.answers} 
                    answersEnableMinimum={this.props.answersEnableMinimum} 
                    answersMinimum={this.props.answersMinimum}  
                    answersEnableMaximum={this.props.answersEnableMaximum} 
                    answersMaximum={this.props.answersMaximum} 
                    answersEnableFilter={this.props.answersEnableFilter} 
                    answersFilterEnableBlacklistMode={this.props.answersFilterEnableBlacklistMode} 
                    answersFilter={this.props.answersFilter} 

                    index = {this.props.index}

                    addAnswer = {this.props.addAnswer}
                    removeAnswer = {this.props.removeAnswer}
                    setAnswer = {this.props.setAnswer}
                    clearAnswers = {this.props.clearAnswers}
                />
            </Segment>
        )
        :
        (
            null
        )
    }
}


export default QuestionView;
