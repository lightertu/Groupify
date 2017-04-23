import fetch from 'isomorphic-fetch'
import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_GROUPS = 'REQUEST_GROUPS'
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS'
export const UPLOAD_ERROR = 'UPLOAD_ERROR'
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'


// ------------------------------------
// Actions
// ------------------------------------
function requestGroups(url) {
  return {
    type: REQUEST_GROUPS,
    url
  }
}

function receiveGroups(url, json) {
  return {
    type: RECEIVE_GROUPS,
    url,
    data: json,
    receivedAt: Date.now()
  }
}

export function fetchGroups() { // fetch survey
  let url = 'http://localhost:3000/api/groups';
  return dispatch => {
    dispatch(requestGroups(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveGroups(url, json)))
  }
}

// upload student list
function uploadSuccess(res) {
  return {
    type: UPLOAD_SUCCESS,
    message: res
  }
}

function uploadError(error) {
  return {
    type: UPLOAD_ERROR,
    error: error.response.data.error
  }
}

export function uploadStudents(data) {


    let promise = axios.post('http://localhost:3000/api/email', data)
      return dispatch => {
        promise.then(
          res => {
              console.log("success")
              dispatch(uploadSuccess(res));
        },
          err => {
            console.log("failure")
            dispatch(uploadError(err));
          })
  }
}

export const actions = {
  fetchGroups,
  uploadStudents
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_GROUPS]   : (state, action) => action.data,
  [REQUEST_GROUPS]    : (state, action) => []
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
