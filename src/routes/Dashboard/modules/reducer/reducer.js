/**
 * Created by rui on 5/2/17.
 */

import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'

const initialState = {
    surveysViewData: {
        surveys: [
            {
                color: "white",
                surveyId: "blablableebloo",
                name: "Hair Color Survey",
            }
        ]
    },
    activitiesViewData: {
        activities: [
            {
                color: "white",
                activityId: "thisdawyghujiklasdawasda",
                name: "CIS 422",
                endDate: "1911",
                groupCapacity: 10,
                totalCapacity: 40,
                participants: [1,2,3,4]
            }
        ]
    },
    accountSettingsViewData: {
        email: '',
        name: ''
    }
}

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

        /* create update survey actions */
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
        default:
            return state

    }
}

export default dashboardReducer
