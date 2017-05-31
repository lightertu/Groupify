/**
 * Created by Matt on 5/23/17.
 */

import {Map, List, Set, OrderedSet} from 'immutable';

let handleUpdateActivityHolderGetActivity= (state, payload) => {
    let index = state.get('activitiesViewData').get('activities')
                .findIndex((activity) => (activity.get('activityId') === payload)) 
    let newState = state.updateIn(['activitiesViewData', 'activityHolder'], activityHolder=> {
        return (
            (index == -1) ?
               state.get('activitiesViewData').get('activityTemplate')
            :
               state.get('activitiesViewData').get('activities').get(index)
        )
    });
    return newState;
}


let handleUpdateActivityHolderSetId= (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'activityHolder', 'activityId'], payload);
    return newState;
}

let handleUpdateActivityHolderSetTitle = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'activityHolder', 'title'], payload);
    return newState;
}

let handleUpdateActivityHolderSetTotalCapacity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'activityHolder', 'totalCapacity'], payload);
    return newState;
}

let handleUpdateActivityHolderSetGroupCapacity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'activityHolder', 'groupCapacity'], payload);
    return newState;
}

let handleUpdateActivityHolderSetCurrentCapacity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'activityHolder', 'currentCapacity'], payload);
    return newState;
}

let handleUpdateActivityHolderSetEndDate = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'activityHolder', 'endDate'], payload);
    return newState;
}

export {
    handleUpdateActivityHolderGetActivity,
    handleUpdateActivityHolderSetId,
    handleUpdateActivityHolderSetTitle,

    handleUpdateActivityHolderSetTotalCapacity,
    handleUpdateActivityHolderSetGroupCapacity,
    handleUpdateActivityHolderSetCurrentCapacity,
    handleUpdateActivityHolderSetEndDate,
}
