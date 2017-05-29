let handleCreateLocks = (state, payload) => {
	console.log(payload)
	let unlocked = [];
    while(payload--) unlocked.push(true)
    let update = state.get("unlocked");
	update.concat(unlocked);
	update = update.set("unlocked", unlocked);
	return update;
}

let handleToggleLock = (state, payload) => {
	console.log(payload)
	let update = state.setIn(["unlocked", payload, !state.getIn(["unlocked", payload])]);
	return update;
}

export {
	handleCreateLocks,
	handleToggleLock
}