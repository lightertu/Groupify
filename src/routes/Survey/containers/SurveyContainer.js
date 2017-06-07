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
    fetchSurvey: Actions.fetchSurveyActions.fetchSurvey(dispatch),
    submitSurvey: Actions.submitSurveyActions.submitSurvey(dispatch),

    setIsSubmitting: Actions.submitSurveyActions.setIsSubmitting(dispatch),
    setFailedToSubmit: Actions.submitSurveyActions.setFailedToSubmit(dispatch),
    setSubmitError: Actions.submitSurveyActions.setSubmitError(dispatch),

    setName : Actions.updateSurveyQuestionActions.setName(dispatch),
    setEmail : Actions.updateSurveyQuestionActions.setEmail(dispatch),
    
    addAnswer : Actions.updateSurveyQuestionActions.addAnswer(dispatch),
    removeAnswer : Actions.updateSurveyQuestionActions.removeAnswer(dispatch),
    setAnswer : Actions.updateSurveyQuestionActions.setAnswer(dispatch),
    clearAnswers : Actions.updateSurveyQuestionActions.clearAnswers(dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.survey.get('name'),
        email: state.survey.get('email'),

        isLoading: state.survey.get('isLoading'),
        failedToGet: state.survey.get('failedToGet'),

        title: state.survey.get('title'),
        questions : state.survey.get('questions'),

        submitted: state.survey.get('submitted'),
        failedToSubmit: state.survey.get('failedToSubmit'),
        submitError: state.survey.get('submitError'),
        isSubmitting: state.survey.get('isSubmitting'),


        activityId: ownProps.location.query.id,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyView);
