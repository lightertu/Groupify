import axios from "axios";
const SERVER_URL = "http://" + window.location.host;

export const TOGGLE_LOCK = "TOGGLE_LOCK";
let toggleLock = (dispatch) => {
	return (group, isLocked, activityId) => {
        let lockUrl = SERVER_URL + "/api/activities/" + activityId + "/lockedGroup";
        let unlockUrl = SERVER_URL + "/api/activities/" + activityId + "/lockedGroup/" + group;
        isLocked?
                axios.delete(unlockUrl)
                    .then((response) => {
                        dispatch({ type: TOGGLE_LOCK, payload: group});
                    })
                    .catch((error) => {
                        console.log(error)
                    })
           :
                axios.post(lockUrl, {groupNumber:group})
                    .then((response) => {
                        dispatch({ type: TOGGLE_LOCK, payload: group});
                    })
                    .catch((error) => {
                        console.log(error)
                    })
	};
};

export {
	toggleLock
}
