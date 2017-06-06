/**
 * Created by Matt on 05/16/17.
 */
import * as Actions from "../actions"
import * as ActionsHandlers from "./actionsHandlers"
import {Map, Set, List, OrderedSet} from 'immutable';

const initialState = Map({
    name: "",
    email: "",

    isLoading:true,
    failedToGet:false,

    title: "",
    questions : List([]),

    isSubmitting:false,
    failedToSubmit:false,
    submitError:'',
    submitted:false,
});

export default function surveyReducer (state = initialState, action) {
    switch(action.type) {
        /* Fetching Survey Actions */
        case Actions.fetchSurveyActions.FETCH_SURVEY:
            return ActionsHandlers.fetchSurveyActionHandlers.handleFetchingSurvey(state, action.payload);
        case Actions.fetchSurveyActions.FETCH_SURVEY_SUCCESS:
            return ActionsHandlers.fetchSurveyActionHandlers.handleFetchSurveySuccess(state, action.payload);
        case Actions.fetchSurveyActions.FETCH_SURVEY_FAILURE:
            return ActionsHandlers.fetchSurveyActionHandlers.handleFetchSurveyFailure(state, action.payload);

        /* Submitting Survey Actions */
        case Actions.submitSurveyActions.SUBMIT_SURVEY:
            return ActionsHandlers.submitSurveyActionHandlers.handleSubmitingSurvey(state, action.payload);
        case Actions.submitSurveyActions.SUBMIT_SURVEY_SUCCESS:
            return ActionsHandlers.submitSurveyActionHandlers.handleSubmitSurveySuccess(state, action.payload);
        case Actions.submitSurveyActions.SUBMIT_SURVEY_FAILURE:
            return ActionsHandlers.submitSurveyActionHandlers.handleSubmitSurveyFailure(state, action.payload);

        case Actions.submitSurveyActions.SET_IS_SUBMITTING:
            return ActionsHandlers.submitSurveyActionHandlers.handleSetIsSubmitting(state, action.payload);

        case Actions.submitSurveyActions.SET_FAILED_TO_SUBMIT:
            return ActionsHandlers.submitSurveyActionHandlers.handleSetFailedToSubmit(state, action.payload);

        case Actions.submitSurveyActions.SET_SUBMIT_ERROR:
            return ActionsHandlers.submitSurveyActionHandlers.handleSetSubmitError(state, action.payload);

        /* Answering Questions Actions */
        case Actions.updateSurveyQuestionActions.SET_NAME:
            return ActionsHandlers.updateSurveyQuestionActionHandlers.setName(state, action.payload);

        case Actions.updateSurveyQuestionActions.SET_EMAIL:
            return ActionsHandlers.updateSurveyQuestionActionHandlers.setEmail(state, action.payload);

        case Actions.updateSurveyQuestionActions.ADD_ANSWER:
            return ActionsHandlers.updateSurveyQuestionActionHandlers.addAnswer(state, action.payload);

        case Actions.updateSurveyQuestionActions.REMOVE_ANSWER:
            return ActionsHandlers.updateSurveyQuestionActionHandlers.removeAnswer(state, action.payload);
        case Actions.updateSurveyQuestionActions.SET_ANSWER:
            return ActionsHandlers.updateSurveyQuestionActionHandlers.setAnswer(state, action.payload);

        case Actions.updateSurveyQuestionActions.CLEAR_ANSWERS:
            return ActionsHandlers.updateSurveyQuestionActionHandlers.clearAnswer(state, action.payload);

        default:
            return state;
    }
};
