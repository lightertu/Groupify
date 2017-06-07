export const SORT_PARTICIPANTS = "SORT_PARTICIPANTS"
let sortParticipants = (participants) => { 
	return {type: SORT_PARTICIPANTS, payload: participants };
};

export const FILTER_PARTICIPANTS = "FILTER_PARTICIPANTS_useless"
let filterParticipants = (dispatch) => {
	return (userId) => { 
		dispatch({ type: FILTER_PARTICIPANTS, payload: userId });
	 };
};

export const RESET_PARTICIPANTS = "RESET_PARTICIPANTS"
let resetParticipants = () => {
	return { type: RESET_PARTICIPANTS };
}

export {
	sortParticipants,
	filterParticipants,
	resetParticipants,
}