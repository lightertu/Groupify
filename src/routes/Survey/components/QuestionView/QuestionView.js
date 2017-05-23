/**
 * Created by Matt on 05/08/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Label, Header} from 'semantic-ui-react';
import {Map, List} from 'immutable';
import * as Questions from './Questions'

class QuestionView extends React.Component {
    
    render() {
    
        const  Question = Questions[this.props.type + "QuestionView"];

        return (
            <div>
                {Question && 
                    <Question
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
                        
                        addSurveyQuestionAnswer={this.props.addSurveyQuestionAnswer} 
                        removeSurveyQuestionAnswer={this.props.removeSurveyQuestionAnswer} 
                        clearSurveyQuestionAnswers={this.props.clearSurveyQuestionAnswers} 
                        
                        createSurveyQuestion={this.props.createSurveyQuestion} 
                        deleteSurveyQuestion={this.props.deleteSurveyQuestion} 

                        enableSurveyQuestionAnswersMaximum={this.props.enableSurveyQuestionAnswersMaximum} 
                        disableSurveyQuestionAnswersMaximum={this.props.disableSurveyQuestionAnswersMaximum} 
 
                        enableSurveyQuestionAnswersMinimum={this.props.enableSurveyQuestionAnswersMinimum} 
                        disableSurveyQuestionAnswersMinimum={this.props.disableSurveyQuestionAnswersMinimum} 
                        
                        setSurveyQuestionAnswersMaximum={this.props.setSurveyQuestionAnswersMaximum} 
                             
                        setSurveyQuestionAnswersMinimum={this.props.setSurveyQuestionAnswersMinimum}

                        enableSurveyQuestionAnswersFilter={this.props.enableSurveyQuestionAnswersFilter} 

                        disableSurveyQuestionAnswersFilter={this.props.disableSurveyQuestionAnswersFilter} 
                             
                        enableSurveyQuestionAnswersFilterBlacklistMode={this.props.enableSurveyQuestionAnswersFilterBlacklistMode} 

                        disableSurveyQuestionAnswersFilterBlacklistMode={this.props.disableSurveyQuestionAnswersFilterBlacklistMode} 
                        
                        addSurveyQuestionAnswersFilter={this.props.addSurveyQuestionAnswersFilter} 
                        removeSurveyQuestionAnswersFilter={this.props.removeSurveyQuestionAnswersFilter} 
                        clearSurveyQuestionAnswersFilters={this.props.clearSurveyQuestionAnswersFilters} 
                        
                        survey={this.props.survey.toJSON()} 

                    />
                } 
            </div>
        );
    }
}


export default QuestionView;
