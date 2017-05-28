/**
 * Created by Matt on 5/23/17.
 */

export const UPDATE_SURVEY_HOLDER_GET_SURVEY = "UPDATE_SURVEY_HOLDER_GET_SURVEY";
let updateSurveyHolderGetSurvey  = (dispatch) =>      {

    return (payload) => {
        
        dispatch({type: UPDATE_SURVEY_HOLDER_GET_SURVEY, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_SET_ID = "UPDATE_SURVEY_HOLDER_SET_ID";
let updateSurveyHolderSetId  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_SET_ID, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_SET_TITLE = "UPDATE_SURVEY_HOLDER_SET_TITLE";
let updateSurveyHolderSetTitle  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_SET_TITLE, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_CREATE = "UPDATE_SURVEY_HOLDER_QUESTION_CREATE";
let updateSurveyHolderQuestionCreate  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_CREATE, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_DELETE = "UPDATE_SURVEY_HOLDER_QUESTION_DELETE";
let updateSurveyHolderQuestionDelete  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_DELETE, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_SET_TYPE = "UPDATE_SURVEY_HOLDER_QUESTION_SET_TYPE";
let updateSurveyHolderQuestionSetType  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_SET_TYPE, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_SET_TITLE = "UPDATE_SURVEY_HOLDER_QUESTION_SET_TITLE";
let updateSurveyHolderQuestionSetTitle  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_SET_TITLE, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_SET_TOOLTIP = "UPDATE_SURVEY_HOLDER_QUESTION_SET_TOOLTIP";
let updateSurveyHolderQuestionSetTooltip  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_SET_TOOLTIP, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_SET_FILTER = "UPDATE_SURVEY_HOLDER_QUESTION_SET_FILTER";
let updateSurveyHolderQuestionSetFilter  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_SET_FILTER, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER = "UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER";
let updateSurveyHolderQuestionToggleFilter  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER_MODE = "UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER_MODE";
let updateSurveyHolderQuestionToggleFilterMode  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_FILTER_MODE, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MAXIMUM = "UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MAXIMUM";
let updateSurveyHolderQuestionSetAnswersMaximum  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MAXIMUM, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MINIMUM = "UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MINIMUM";
let updateSurveyHolderQuestionSetAnswersMinimum  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_SET_ANSWERS_MINIMUM, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MAXIMUM = "UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MAXIMUM";
let updateSurveyHolderQuestionToggleAnswersMaximum  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MAXIMUM, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MINIMUM = "UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MINIMUM";
let updateSurveyHolderQuestionToggleAnswersMinimum  = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_TOGGLE_ANSWERS_MINIMUM, payload: payload});

    }

}

export const UPDATE_SURVEY_HOLDER_QUESTION_INDEX = "UPDATE_SURVEY_HOLDER_QUESTION_INDEX";
let updateSurveyHolderQuestionIndex = (dispatch) =>      {

    return (payload) => {

        dispatch({type: UPDATE_SURVEY_HOLDER_QUESTION_INDEX, payload: payload});

    }

}

export {
    updateSurveyHolderGetSurvey,
    updateSurveyHolderSetId,
    updateSurveyHolderSetTitle,
    updateSurveyHolderQuestionCreate,
    updateSurveyHolderQuestionDelete,
    updateSurveyHolderQuestionSetType,
    updateSurveyHolderQuestionSetTitle,
    updateSurveyHolderQuestionSetTooltip,
    updateSurveyHolderQuestionSetFilter,
    updateSurveyHolderQuestionToggleFilter,
    updateSurveyHolderQuestionToggleFilterMode,
    updateSurveyHolderQuestionSetAnswersMaximum,
    updateSurveyHolderQuestionSetAnswersMinimum,
    updateSurveyHolderQuestionToggleAnswersMaximum,
    updateSurveyHolderQuestionToggleAnswersMinimum,
    
    updateSurveyHolderQuestionIndex,
}
