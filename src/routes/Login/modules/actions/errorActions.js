export const SET_ERROR_FALSE = "SET_ERROR_FALSE";
let setErrorFalse = () => {
    return { type: SET_ERROR_FALSE};
};

export const SET_ERROR_TRUE = "SET_ERROR_TRUE";
let setErrorTrue = () => {
    return { type: SET_ERROR_TRUE};
};

export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
let setErrorMessage = (message) => {
    return { type: SET_ERROR_MESSAGE, payload: message };
};

export {
    setErrorFalse,
    setErrorTrue,
    setErrorMessage
}
