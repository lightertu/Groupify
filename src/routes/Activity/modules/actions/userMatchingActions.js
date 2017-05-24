export const SORT_PARTICIPANTS = "SORT_PARTICIPANTS"
let sortParticiapnts = (participants) => {
	return { type: SORT_PARTICIPANTS, payload: participants };
}

export const FILTER_PARTICIPANTS = "FILTER_PARTICIPANTS"
let filterParticiapnts = (userID) => {
	return { type: FILTER_PARTICIPANTS, payload: userID };
}

export const RESET_PARTICIPANTS = "RESET_PARTICIPANTS"
let resetParticiapnts = () => {
	return { type: RESET_PARTICIPANTS };
}

