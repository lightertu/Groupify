/**
 * Created by rui on 5/9/17.
 * Developed by Matt on 6/2/17
 */

import {Map, Set, List, OrderedSet} from 'immutable';
let handleFetchParticipantList = (state, payload) => {
    return state;
};
let handleFetchParticipantListSuccess = (state, payload) => {
    let participantList = List([]);

    payload.participants.forEach((participant) => {
        participantList = participantList.push(Map(participant));          
    });

    let newState = state.set("participants", participantList);


    newState = newState.update('participants', (participants) => {
        let newParticipants = List([]);
        participants.forEach((participant) => {
            let newSurveyResponses = List([]);
            participant.get('surveyResponses').forEach((response) => {
                let newResponse = Map({
                    question: response.question ,
                    answer: Set(response.answer)
                });
                newSurveyResponses = newSurveyResponses.push(newResponse);
            });
            newParticipants = newParticipants.push(Map({
                surveyResponses: newSurveyResponses,
                participantId:participant.get('_id'),
                groupNumber: participant.get('groupNumber'),
                name:participant.get('name'),
                image:participant.get('image')
            }));
        });
        return newParticipants; 
    });

    newState = newState.update("allAnswers", (allAnswers) => {
        let newAllAnswers = Set([]);
        newState.get('participants').forEach((participant) => {
            participant.get('surveyResponses').forEach((response) => {
                newAllAnswers = newAllAnswers.union(response.get('answer'));
            });
        });
        return newAllAnswers;
    });

    newState = newState.set("groupCapacity", payload.groupCapacity);
    newState = newState.set("totalCapacity", payload.totalCapacity);
    newState = newState.set("lockedGroups", Set(payload.lockedGroups));
    return newState
};

let handleFetchParticipantListFailure = (state, payload) => {
    return state;
};

export {
    handleFetchParticipantList,
    handleFetchParticipantListSuccess,
    handleFetchParticipantListFailure
}
