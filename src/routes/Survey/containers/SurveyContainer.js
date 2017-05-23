/**
 * Created by Matt on 05/16/17.
 */
import {connect} from 'react-redux'
import {Map, List, Set} from 'immutable';

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case */
import SurveyView from '../components/SurveyView'
import * as Actions from "../modules/actions"


const mapDispatchToProps = (dispatch) => ({
    createSurveyQuestion: Actions.createSurveyQuestionActions.createSurveyQuestion(dispatch),
    deleteSurveyQuestion: Actions.deleteSurveyQuestionActions.deleteSurveyQuestion(dispatch),
    
    addSurveyQuestionAnswer: Actions.addSurveyQuestionAnswerActions.addSurveyQuestionAnswer(dispatch),
    removeSurveyQuestionAnswer: Actions.removeSurveyQuestionAnswerActions.removeSurveyQuestionAnswer(dispatch),
    clearSurveyQuestionAnswers: Actions.clearSurveyQuestionAnswersActions.clearSurveyQuestionAnswers(dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        questions : state.survey.get('questions')
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyView);
