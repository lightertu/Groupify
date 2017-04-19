import fetch from 'isomorphic-fetch'
import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const GENERATE_ERROR = 'GENERATE_ERROR'
export const GENERATE_SUCCESS = 'GENERATE_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
function generateSuccess(res) {
  return {
    type: GENERATE_SUCCESS,
    message: res
  }
}

function generateError(error) {
  return {
    type: GENERATE_ERROR,
    error: error.response.data.error
  }
}


export function generateSurvey(id) {
    console.log("generating survey")
    let promise = axios.post('http://localhost:3000/api/groups', {
      form: id,
      color: "pink",
      title: "TEST"
    })
      return dispatch => {
        promise.then(
          res => {
              console.log("success")
              dispatch(generateSuccess(res));
        },
          err => {
            console.log("failure")
            dispatch(generateError(err));
          })
  }
}

export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync,
  generateSurvey
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [GENERATE_SUCCESS]     : (state, action) => "success",
  [GENERATE_ERROR]       : (state, action) => "failure"
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
