/**
 * Created by rui on 5/9/17.
 * updated by Matt on 5/29/17
 */

import {Map, Set, List, OrderedSet} from 'immutable';
// add more handlers for fetching activity list action
let handleFetchingActivityList = (state, payload) => {
    let newState = state.updateIn(['activitiesViewData', 'isLoading'], activities => {
        return true;
    });
    newState = newState.updateIn(['activitiesViewData', 'failedToGet'], activities => {
        return false;
    });   
    return newState;

}
let handleFetchActivityListSuccess = (state, payload) => {
    let newActivitys = List([]);
    payload['activities'].forEach((activity) => {
        newActivitys = newActivitys.push(
            Map({
                'title':activity.name, 
                'activityId': activity._id, 
                'color':activity.color,
                'currentCapacity':activity.currentCapacity,
                'groupCapacity':activity.groupCapacity,
                'totalCapacity':activity.totalCapacity,
                'endDate':activity.endDate
            })
        ) 
    });

    let newState = state.updateIn(['activitiesViewData', 'activities'], activities => {
        return newActivitys;
    });
    
    newState = newState.updateIn(['activitiesViewData', 'isLoading'], activities => {
        return false;
    });


    return newState;
}

let handleFetchActivityListFailure = (state, payload) =>  {
    let newState = state.updateIn(['activitiesViewData', 'failedToGet'], activities => {
        return true;
    });
            
    return newState;
            
}

export {
    handleFetchingActivityList,
    handleFetchActivityListSuccess,
    handleFetchActivityListFailure
}
