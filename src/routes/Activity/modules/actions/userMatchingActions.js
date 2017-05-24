export const SORT_PARTICIPANTS = "SORT_PARTICIPANTS"
let sortParticipants = (dispatch) => {
	return (participants) => { 
		dispatch({type: SORT_PARTICIPANTS, payload: participants });
	}
};

export const FILTER_PARTICIPANTS = "FILTER_PARTICIPANTS"
let filterParticipants = (userID) => {
	return { type: FILTER_PARTICIPANTS, payload: userID };
}

export const RESET_PARTICIPANTS = "RESET_PARTICIPANTS"
let resetParticipants = () => {
	return { type: RESET_PARTICIPANTS };
}

export {
	sortParticipants,
	filterParticipants,
	resetParticipants,
}