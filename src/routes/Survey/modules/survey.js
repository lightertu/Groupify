import fetch from 'isomorphic-fetch'
import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_SURVEY = 'REQUEST_SURVEY'
export const RECEIVE_SURVEY = 'RECEIVE_SURVEY'
export const SURVEY_ERROR = 'SURVEY_ERROR'
export const SURVEY_SUCCESS = 'SURVEY_SUCCESS'
// ------------------------------------
// Actions
// ------------------------------------

// survey request
function requestSurvey(url) {
  return {
    type: REQUEST_SURVEY,
    url
  }
}

function receiveSurvey(url, json) {
  return {
    type: RECEIVE_SURVEY,
    url,
    data: json,
    receivedAt: Date.now()
  }
}

export function fetchSurvey(id) { // fetch survey
  let url = 'http://localhost:3000/api/groups/'+id;
  console.log("Fetching...")
  return dispatch => {
    dispatch(requestSurvey(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveSurvey(url, json)))
  }
}

// survey post
function surveySuccess(res) {
  return {
    type: SURVEY_SUCCESS,
    message: res
  }
}

function surveyError(error) {
  return {
    type: SURVEY_ERROR,
    error: error.response.data.error
  }
}


export function generateSurvey(id, data) {
    console.log("updating survey")
    let promise = axios.post('http://localhost:3000/api/groups/'+id, data)
      return dispatch => {
        promise.then(
          res => {
              console.log("success")
              dispatch(surveySuccess(res));
        },
          err => {
            console.log("failure")
            dispatch(surveyError(err));
          })
  }
}

export const actions = {
  fetchSurvey,
  generateSurvey
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_SURVEY]   : (state, action) => action.data,
  [REQUEST_SURVEY]    : (state, action) => "requesting"

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
