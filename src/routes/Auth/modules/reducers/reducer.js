/**
 * Created by Joseph on 5/11/17.
 */
import * as Actions from "../actions"
import * as ActionsHandlers from "./actionHandlers"

const initialState = {
    response: { success: "", message: ""},
    state: "waiting",
    login: { success: "", message: ""},
    loginState: "waiting",
    isAuthenticated: false,
    user: {},
    errorDisplay: false,
    errorMessage: "",
    errorColor: ""
};

export default function activityReducer (state = initialState, action) {
    return state;
};
