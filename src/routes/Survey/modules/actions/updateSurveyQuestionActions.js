/**
 * Created by Matt on 5/23/17.
 */

/* fetching, get requests */
export const SET_NAME = "SET_NAME";
let setName = (dispatch) => {
    return (payload) => {
        dispatch({type: SET_NAME, payload: payload});
    }
};

export const SET_EMAIL = "SET_EMAIL";
let setEmail = (dispatch) => {
    return (payload) => {
        dispatch({type: SET_EMAIL, payload: payload});
    }
};

export const ADD_ANSWER = "ADD_ANSWER";
let addAnswer = (dispatch) => {
    return (index, answer) => {
        dispatch({type: ADD_ANSWER, payload: {index:index, answer:answer}});
    }
};

export const REMOVE_ANSWER = "REMOVE_ANSWER";
let removeAnswer = (dispatch) => {
    return (index, answer) => {
        dispatch({type: REMOVE_ANSWER, payload: {index:index, answer:answer}});
    }
};

export const SET_ANSWER = "SET_ANSWER";
let setAnswer = (dispatch) => {
    return (index, answer) => {
        dispatch({type: SET_ANSWER, payload: {index:index, answer:answer}});
    }
};

export const CLEAR_ANSWERS = "CLEAR_ANSWERS";
let clearAnswers = (dispatch) => {
    return (index) => {
        dispatch({type: CLEAR_ANSWERS, payload: {index:index}});
    }
};

export {
    setName,
    setEmail,

    addAnswer,
    removeAnswer,
    setAnswer,
    clearAnswers,
}
