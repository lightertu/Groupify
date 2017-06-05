import { Map, List } from "immutable"

let handleCreateLocks = (state, payload) => {
	let unlocked = [];
    while(payload--) unlocked.push(false)
    let update = state.get("unlocked");
	update.concat(unlocked);
	update = state.set("unlocked", List(unlocked));
	return update;
}

let handleToggleLock = (state, payload) => {
    console.log('Toggle');
	let update = state.setIn(["unlocked", payload], !state.getIn(["unlocked", payload]));
	return state;
}

export {
	handleCreateLocks,
	handleToggleLock
}
