import React from 'react'
import {Grid, Card, Label, Button} from 'semantic-ui-react'
import QuestionView from './QuestionView'

import {Map, List, Set, OrderedSet} from 'immutable';

class Survey extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map(question => 
                        <QuestionView key={"QV_" + question.get("type") + "_" + question.get("title")} 
                            type={question.get("type")} 
                            title={question.get("title")} 
                            tooltip={question.get("tooltip")} 
                            answers={question.get("answers")} 
                            answersEnableMinimum={question.get("answersEnableMinimum")} 
                            answersMinimum={question.get("answersMinimum")}  
                            answersEnableMaximum={question.get("answersEnableMaximum")} 
                            answersMaximum={question.get("answersMaximum")} 
                            answersEnableFilter={question.get("answersEnableFilter")} 
                            answersFilterEnableBlacklistMode={
                                question.get("answersFilterEnableBlacklistMode")
                            } 
                            answersFilter={question.get("answersFilter")}

                            addSurveyQuestionAnswer={this.props.addSurveyQuestionAnswer} 
                            removeSurveyQuestionAnswer={this.props.removeSurveyQuestionAnswer} 
                            clearSurveyQuestionAnswers={this.props.clearSurveyQuestionAnswers} 
                        />
                )} 
            </div>
        )
    }
}

export default Survey;
