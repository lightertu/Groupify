/**
 * Created by Matt on 5/23/17.
 */

import {Map, List, Set, OrderedSet} from 'immutable';

let handleUpdateSurveyHolderGetSurvey= (state, payload) => {
    let index = state.get('surveysViewData').get('surveys')
                .findIndex((survey) => (survey.get('surveyId') === payload)) 
    let newState = state.updateIn(['surveysViewData', 'surveyHolder'], surveyHolder=> {
        return (
            (index == -1) ?
               state.get('surveysViewData').get('surveyTemplate')
            :
               state.get('surveysViewData').get('surveys').get(index)
        )
    });
    return newState;
}


let handleUpdateSurveyHolderSetId= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'surveyId'], surveyId => {
        return payload;
    });
    return newState;
}

let handleUpdateSurveyHolderSetTitle = (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'title'], title => {
        return payload;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionCreate= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions'], questions => {
        return questions.push( 
            Map({
                'type':'',
                'title':'',
                'tooltip':'',

                'answers':Set([]),

                'answersEnableMaximum':false, 'answersMaximum':0,
                'answersEnableMinimum':false, 'answersMinimum':0,
                'answersEnableFilter':false, 'answersFilterEnableBlacklistMode':false, 'answersFilter':OrderedSet([]),
            })        
       );
    });
    newState = newState.setIn(['surveysViewData', 'surveyHolderQuestionIndex'], 
        newState.get('surveysViewData').get('surveyHolder').get('questions').size -1
    );
    return newState;
}

let handleUpdateSurveyHolderQuestionDelete= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions'], questions => {
        return questions.delete(payload);
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionSetTitle= (state, payload) => {
     let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions'], questions => {
        return questions.setIn([payload.index, 'title'], payload.title);
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionSetType= (state, payload) => {
     let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions'], questions => {
        return questions.setIn([payload.index, 'type'], payload.type);
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionSetTooltip= (state, payload) => {
     let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions'], questions => {
        return questions.setIn([payload.index, 'tooltip'], payload.tooltip);
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionSetFilter= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload.index, 'answersFilter'], (answersFilter) => {
            return OrderedSet(payload.filter);
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionToggleFilter= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload, 'answersEnableFilter'], (toggle) => {
            return !toggle;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionToggleFilterMode= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload, 'answersFilterEnableBlacklistMode'], (toggle) => {
            return !toggle;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionSetAnswersMaximum= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload.index, 'answersMaximum'], (value) => {
            return payload.value;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionSetAnswersMinimum= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload.index, 'answersMinimum'], (value) => {
            return payload.value;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionToggleAnswersMaximum= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload, 'answersEnableMaximum'], (toggle) => {
            return !toggle;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionToggleAnswersMinimum= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolder', 'questions', 
        payload, 'answersEnableMinimum'], (toggle) => {
            return !toggle;
    });
    return newState;
}

let handleUpdateSurveyHolderQuestionIndex= (state, payload) => {
    let newState = state.updateIn(['surveysViewData', 'surveyHolderQuestionIndex'], index => {
        return payload;
    });
    return newState;
}



export {
    handleUpdateSurveyHolderGetSurvey,
    handleUpdateSurveyHolderSetId,
    handleUpdateSurveyHolderSetTitle,
    handleUpdateSurveyHolderQuestionCreate,
    handleUpdateSurveyHolderQuestionDelete,
    handleUpdateSurveyHolderQuestionSetType,
    handleUpdateSurveyHolderQuestionSetTitle,
    handleUpdateSurveyHolderQuestionSetTooltip,
    handleUpdateSurveyHolderQuestionSetFilter,
    handleUpdateSurveyHolderQuestionToggleFilter,
    handleUpdateSurveyHolderQuestionToggleFilterMode,
    handleUpdateSurveyHolderQuestionSetAnswersMaximum,
    handleUpdateSurveyHolderQuestionSetAnswersMinimum,
    handleUpdateSurveyHolderQuestionToggleAnswersMaximum,
    handleUpdateSurveyHolderQuestionToggleAnswersMinimum,
    
    handleUpdateSurveyHolderQuestionIndex,
}
