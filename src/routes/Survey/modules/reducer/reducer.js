/**
 * Created by Matt on 05/16/17.
 */
import * as Actions from "../actions"
import * as ActionsHandlers from "./actionsHandlers"
import {Map, Set, List, OrderedSet} from 'immutable';

const initialState = Map({
    title: "default",
    questions : List([
        Map({
            'type':'CircleSelection', 
            'title':'Available Times', 
            'tooltip':'Select the days when you are available to meet with other team members', 

            'answers':Set(['Sunday', 'Monday', 'Thursday', 'Friday']),

            'answersEnableMaximum':false, 'answersMaximum':0,
            'answersEnableMinimum':false, 'answersMinimum':0,
            'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 'answersFilter':OrderedSet(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']),
        }),
        Map({
            'type':'MultiInputTextField', 
            'title':'Programming Languages', 
            'tooltip':'Type the languages you are good at, seperated by comma', 

            'answers':Set([]),

            'answersEnableMaximum':false, 'answersMaximum':0,
            'answersEnableMinimum':false, 'answersMinimum':0,
            'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 'answersFilter':OrderedSet([])
        }),
        Map({
            'type':'SingleInputTextField', 
            'title':'Email Address', 
            'tooltip':'What is your email', 

            'answers':Set([]),

            'answersEnableMaximum':false, 'answersMaximum':0,
            'answersEnableMinimum':false, 'answersMinimum':0,
            'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 'answersFilter':OrderedSet([]),
        }),
        Map({
            'type':'test', 
            'title':'Email Address', 
            'tooltip':'What is your email', 

            'answers':Set([]),

            'answersEnableMaximum':false, 'answersMaximum':0,
            'answersEnableMinimum':false, 'answersMinimum':0,
            'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 'answersFilter':OrderedSet([]),
        })

    ]),
});

export default function surveyReducer (state = initialState, action) {
    switch(action.type) {

        /* reduce survey question actions */
        case Actions.addSurveyQuestionAnswerActions.ADD_SURVEY_QUESTION_ANSWER:
            return ActionsHandlers.addSurveyQuestionAnswerActionsHandlers.addSurveyQuestionAnswer(state, action.payload);
        case Actions.removeSurveyQuestionAnswerActions.REMOVE_SURVEY_QUESTION_ANSWER:
            return ActionsHandlers.removeSurveyQuestionAnswerActionsHandlers.removeSurveyQuestionAnswer(state, action.payload);
        case Actions.clearSurveyQuestionAnswersActions.CLEAR_SURVEY_QUESTION_ANSWERS:
            return ActionsHandlers.clearSurveyQuestionAnswersActionsHandlers.clearSurveyQuestionAnswers(state, action.payload);

        case Actions.createSurveyQuestionActions.CREATE_SURVEY_QUESTION:
            return ActionsHandlers.createSurveyQuestionActionsHandlers.createSurveyQuestion(state, action.payload);
        case Actions.deleteSurveyQuestionActions.DELETE_SURVEY_QUESTION:
            return ActionsHandlers.deleteSurveyQuestionActionsHandlers.deleteSurveyQuestion(state, action.payload);

        default:
            return state;
    }
};
