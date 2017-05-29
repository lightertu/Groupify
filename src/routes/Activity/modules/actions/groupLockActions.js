export const CREATE_LOCKS = "CREATE_LOCKS"
let createLocks = (dispatch) => {
	return (size) => {
		dispatch({ type: CREATE_LOCKS, payload: size});
	};
};

export const TOGGLE_LOCKS = "TOGGLE_LOCKS";
let toggleLock = (dispatch) => {
	return (group) => {
		dispatch({ type: TOGGLE_LOCKS, payload: group});
	};
};

export {
	createLocks,
	toggleLock
}