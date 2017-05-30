/**
 * Created by rui on 5/2/17.
 */

import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'
import {Map, Set, List, OrderedSet} from 'immutable';

const initialState = Map({
    surveysViewData: Map({
        isLoading:true,
        failedToGet:false,

        openEditModal:false,
        isEditing:false,
        failedToEdit:false,
        editError:'',

        openCreateModal:false,
        isCreating:false,
        failedToCreate:false,
        createError:'',

        openDeleteModal:false,
        isDeleting:false,
        failedToDelete:false,
        deleteError:'',

        surveys: List([]),

        surveyHolderQuestionIndex:0,
        surveyHolder: Map({
            title: '',
            surveyId:'',
            questions : List([
                Map({
                    'type':'',
                    'title':'',
                    'tooltip':'',

                    'answers':Set([]),

                    'answersEnableMaximum':false, 'answersMaximum':0,
                    'answersEnableMinimum':false, 'answersMinimum':0,
                    'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 
                    'answersFilter':OrderedSet([]),
                }),])
        }),
        surveyTemplate: Map({
            title: '',
            surveyId:'',
            questions : List([
                Map({
                    'type':'',
                    'title':'',
                    'tooltip':'',

                    'answers':Set([]),

                    'answersEnableMaximum':false, 'answersMaximum':0,
                    'answersEnableMinimum':false, 'answersMinimum':0,
                    'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 
                    'answersFilter':OrderedSet([]),
                }),])
        }),

    }),


    activitiesViewData: Map({
        isLoading:true,
        failedToGet:false,

        openEditModal:false,
        isEditing:false,
        failedToEdit:false,
        editError:'',

        openCreateModal:false,
        isCreating:false,
        failedToCreate:false,
        createError:'',

        openDeleteModal:false,
        isDeleting:false,
        failedToDelete:false,
        deleteError:'',

        activities: List([]),

        activityHolder: Map({
            color: '',
            activityId: '',
            name: '',
            endDate: '',
            groupCapacity: 0,
            totalCapacity: 0,
            participants: Set([]),
        }),
        activityTemplate: Map({
            color: '',
            activityId: '',
            name: '',
            endDate: '',
            groupCapacity: 0,
            totalCapacity: 0,
            participants: Set([]),
        }),

    }),

    accountSettingsViewData: {
        email: '',
        name: ''
    }
});

let dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        /* fetching activities actions */
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchingActivityList(state, action.payload)
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST_SUCCESS:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListSuccess(state, action.payload)
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST_FAILURE:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListFailure(state, action.payload)

        /* create activity actions */
        case Actions.createActivityActions.CREATE_ACTIVITY:
            return ActionHandlers.createActivityActionHandlers.handleCreateActivity(state, action.payload)
        case Actions.createActivityActions.CREATE_ACTIVITY_SUCCESS:
            return ActionHandlers.createActivityActionHandlers.handleCreateActivitySuccess(state, action.payload)
        case Actions.createActivityActions.CREATE_ACTIVITY_FAILURE:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListFailure(state, action.payload)

        /* create update activity actions */
        case Actions.updateActivityActions.UPDATE_ACTIVITY:
            return ActionHandlers.updateActivityActionHandlers.handleUpdateActivity(state, action.payload)
        case Actions.updateActivityActions.UPDATE_ACTIVITY_SUCCESS:
            return ActionHandlers.updateActivityActionHandlers.handleUpdateActivitySuccess(state, action.payload)
        case Actions.updateActivityActions.UPDATE_ACTIVITY_FAILURE:
            return ActionHandlers.updateActivityActionHandlers.handleUpdateActivityFailure(state, action.payload)

        /* create update activity actions */
        case Actions.deleteActivityActions.DELETE_ACTIVITY:
            return ActionHandlers.deleteActivityActionHandlers.handleDeleteActivity(state, action.payload)
        case Actions.deleteActivityActions.DELETE_ACTIVITY_SUCCESS:
            return ActionHandlers.deleteActivityActionHandlers.handleDeleteActivitySuccess(state, action.payload)
        case Actions.deleteActivityActions.DELETE_ACTIVITY_FAILURE:
            return ActionHandlers.deleteActivityActionHandlers.handleDeleteActivityFailure(state, action.payload)


        /* fetching surveys actions */
        case Actions.fetchSurveyListActions.FETCH_SURVEY_LIST:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchingSurveyList(state, action.payload)
        case Actions.fetchSurveyListActions.FETCH_SURVEY_LIST_SUCCESS:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchSurveyListSuccess(state, action.payload)
        case Actions.fetchSurveyListActions.FETCH_SURVEY_LIST_FAILURE:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchSurveyListFailure(state, action.payload)

        /* create survey actions */
        case Actions.createSurveyActions.CREATE_SURVEY:
            return ActionHandlers.createSurveyActionHandlers.handleCreateSurvey(state, action.payload)
        case Actions.createSurveyActions.CREATE_SURVEY_SUCCESS:
            return ActionHandlers.createSurveyActionHandlers.handleCreateSurveySuccess(state, action.payload)
        case Actions.createSurveyActions.CREATE_SURVEY_FAILURE:
            return ActionHandlers.fetchSurveyListActionHandlers.handleFetchSurveyListFailure(state, action.payload)

        /* create update survey actions */
        case Actions.updateSurveyActions.UPDATE_SURVEY:
            return ActionHandlers.updateSurveyActionHandlers.handleUpdateSurvey(state, action.payload)
        case Actions.updateSurveyActions.UPDATE_SURVEY_SUCCESS:
            return ActionHandlers.updateSurveyActionHandlers.handleUpdateSurveySuccess(state, action.payload)
        case Actions.updateSurveyActions.UPDATE_SURVEY_FAILURE:
            return ActionHandlers.updateSurveyActionHandlers.handleUpdateSurveyFailure(state, action.payload)

        /* create delete survey actions */
        case Actions.deleteSurveyActions.DELETE_SURVEY:
            return ActionHandlers.deleteSurveyActionHandlers.handleDeleteSurvey(state, action.payload)
        case Actions.deleteSurveyActions.DELETE_SURVEY_SUCCESS:
            return ActionHandlers.deleteSurveyActionHandlers.handleDeleteSurveySuccess(state, action.payload)
        case Actions.deleteSurveyActions.DELETE_SURVEY_FAILURE:
            return ActionHandlers.deleteSurveyActionHandlers.handleDeleteSurveyFailure(state, action.payload)

        /* update user profile*/

        case Actions.updateUserProfileActions.UPDATE_USER_PROFILE:
            return ActionHandlers.updateUserProfileActionHandlers.handleUpdateUserProfile(state, action.payload)
        case Actions.updateUserProfileActions.UPDATE_USER_PROFILE_SUCCESS:
            return ActionHandlers.updateUserProfileActionHandlers.handleUpdateUserProfileSuccess(state, action.payload)
        case Actions.updateUserProfileActions.UPDATE_USER_PROFILE_FAILURE:
            return ActionHandlers.updateUserProfileActionHandlers.handleUpdateUserProfileFailure(state, action.payload)


        /* server holder profile*/
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_GET_SURVEY:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderGetSurvey(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_SET_ID:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderSetId(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_SET_TITLE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderSetTitle(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_CREATE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionCreate(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_DELETE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionDelete(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_TYPE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetType(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_TITLE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetTitle(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_TOOLTIP:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetTooltip(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_FILTER:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetFilter(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleFilter(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER_MODE:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleFilterMode(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MAXIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetAnswersMaximum(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MINIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionSetAnswersMinimum(state, action.payload); 
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MAXIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleAnswersMaximum(state, action.payload);
        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MINIMUM:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionToggleAnswersMinimum(state, action.payload);

        case Actions.updateSurveyHolderActions.UPDATE_SURVEY_HOLDER_QUESTION_INDEX:
            return ActionHandlers.updateSurveyHolderActionHandlers.handleUpdateSurveyHolderQuestionIndex(state, action.payload);


        /* server view */
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_OPEN_CREATE_MODAL:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewOpenCreateModal(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_IS_CREATING:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewIsCreating(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_FAILED_TO_CREATE:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewFailedToCreate(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_CREATE_ERROR:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewCreateError(state, action.payload);

        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_OPEN_EDIT_MODAL:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewOpenEditModal(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_IS_EDITING:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewIsEditing(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_FAILED_TO_EDIT:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewFailedToEdit(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_EDIT_ERROR:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewEditError(state, action.payload);

        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_OPEN_DELETE_MODAL:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewOpenDeleteModal(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_IS_DELETING:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewIsDeleting(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_FAILED_TO_DELETE:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewFailedToDelete(state, action.payload);
        case Actions.updateSurveyViewActions.UPDATE_SURVEY_VIEW_DELETE_ERROR:
            return ActionHandlers.updateSurveyViewActionHandlers.handleUpdateSurveyViewDeleteError(state, action.payload);

        default:
            return state

    }
}

export default dashboardReducer
