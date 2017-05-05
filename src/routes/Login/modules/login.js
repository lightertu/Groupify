import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
// ------------------------------------
// Actions
// ------------------------------------

function receiveLogin(url, json) {
  return {
    type: RECEIVE_LOGIN,
    url,
    data: json,
    receivedAt: Date.now()
  }
}

export function checkAuthorization(data) { // fetch survey
  let url = 'http://localhost:3000/api/login';
  console.log("Fetching...");
  return dispatch => {
    return fetch(url, {body: "test"})
      .then(response => response.json())
      .then(json => dispatch(receiveLogin(url, json)))
  }
}


export const actions = {
  checkAuthorization
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_LOGIN]    : (state, action) => action.json,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
