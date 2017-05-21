export const SET_ERROR_DISPLAY = "SET_ERROR_DISPLAY";
let setErrorDisplay = (dispatch) => {
	return (bool) => {
		dispatch({
	            type: SET_ERROR_DISPLAY,
	            bool: bool
	        });

		if(bool) {
			dispatch(setErrorTrue());
		} else {
			dispatch(setErrorFalse());
		}
	    
	};
};

export const SET_ERROR_FALSE = "SET_ERROR_FALSE";
let setErrorFalse = () => {
    return { type: SET_ERROR_FALSE};
};

export const SET_ERROR_TRUE = "SET_ERROR_TRUE";
let setErrorTrue = () => {
    return { type: SET_ERROR_TRUE};
};

export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
let setErrorMessage = (dispatch) => {
    return (message) => {
    	dispatch({type: SET_ERROR_MESSAGE, message: message });
    }
};

export const SET_ERROR_COLOR = "SET_ERROR_COLOR";
let setErrorColor = (color) => {
    return { type: SET_ERROR_COLOR, payload: color};
};

export {
    setErrorFalse,
    setErrorTrue,
    setErrorMessage,
    setErrorDisplay,
    setErrorColor
}
