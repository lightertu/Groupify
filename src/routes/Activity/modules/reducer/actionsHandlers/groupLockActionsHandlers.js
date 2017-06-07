import { Map, List } from "immutable"

let handleToggleLock = (state, payload) => {
	let newState= state.update("lockedGroups", (lockedGroups) => {
           return ((lockedGroups.has(payload)) ? 
                       lockedGroups.remove(payload) 
                   : 
                       lockedGroups.add(payload));
    });
	return newState;
}

export {
	handleToggleLock
}
