/**
 * Created by rui on 5/2/17.
 */

import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'

const initialState = {
    activitiesViewData: {
        activities: [
            {
                color: "white",
                name: "cis422",
                endDate: "1911",
                numberOfCurrentParticipants: 20,
                groupCapacity: 10,
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
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchingActivityList(state, action.payload)
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST_SUCCESS:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListSuccess(state, action.payload)
        case Actions.fetchActivityListActions.FETCH_ACTIVITY_LIST_FAILURE:
            return ActionHandlers.fetchActivityListActionHandlers.handleFetchActivityListFailure(state, action.payload)
        default:
            return state
    }
}

export default dashboardReducer