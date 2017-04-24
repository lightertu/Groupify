import fetch from 'isomorphic-fetch'
import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const GENERATE_ERROR = 'GENERATE_ERROR'
export const GENERATE_SUCCESS = 'GENERATE_SUCCESS'
export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS'
export const CREATE_STUDENT_ERROR = 'CREATE_STUDENT_ERROR'
export const REQUEST_STUDENTS = 'REQUEST_STUDENTS'
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS'

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
    error: error
  }
}

export function generateSurvey(id, data) {
    let colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown']
    let promise = axios.post('http://localhost:3000/api/groups', {
      form: id,
      questions: data['questions'],
      students: data['students'],
      color: colors[Math.floor(Math.random()*colors.length)],
      title: "TEST"
    })
      return dispatch => {
        promise.then(
          res => {
              dispatch(generateSuccess(res));
        },
          err => {
            dispatch(generateError(err));
          })
  }
}

function createStudentsSuccess(res) {
  return {
    type: CREATE_STUDENT_SUCCESS,
    message: res
  }
}

function createStudentsError(error) {
  return {
    type: CREATE_STUDENT_ERROR,
    error: error.response.data.error
  }
}

export function createStudents(data) {
    let promise = axios.post('http://localhost:3000/api/students', data);
      return dispatch => {
        promise.then(
          res => {
              dispatch(createStudentsSuccess(res));
        },
          err => {
            dispatch(createStudentsError(err));
          })
  }
}


function requestStudents(url) {
  return {
    type: REQUEST_STUDENTS,
    url
  }
}

function receiveStudents(url, json) {
  return {
    type: RECEIVE_STUDENTS,
    url,
    data: json,
    receivedAt: Date.now()
  }
}

export function fetchStudents() { // fetch survey
  let url = 'http://localhost:3000/api/students';
  return dispatch => {
    dispatch(requestStudents(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveStudents(url, json)))
  }
}

export const actions = {
  generateSurvey,
  createStudents,
  fetchStudents
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_STUDENT_SUCCESS]     : (state, action) => action.message,
  [CREATE_STUDENT_ERROR]       : (state, action) => state,
  [REQUEST_STUDENTS]           : (state, action) => state,
  [RECEIVE_STUDENTS]           : (state, action) => action.data
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
