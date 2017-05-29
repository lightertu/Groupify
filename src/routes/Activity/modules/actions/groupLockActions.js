export const CREATE_LOCKS = "CREATE_LOCKS"
let createLocks = (size) => {
		return { type: CREATE_LOCKS, payload: size};
};

export const TOGGLE_LOCK = "TOGGLE_LOCK";
let toggleLock = (dispatch) => {
	return (group) => {
		dispatch({ type: TOGGLE_LOCK, payload: group});
	};
};

export {
	createLocks,
	toggleLock
}