let handleSortParticipants = (state, participants) => {
	let idToIndex = {}
	let days = {0: "monday", 1: "tuseday", 2: "wednesday", 3: "thursday", 4: "friday", 5: "saturday", 6: "sunday"};
	let attributes = {
				monday: new Set(),
                tuseday: new Set(),
                wednesday: new Set(),
                thursday: new Set(),
                friday: new Set(),
                saturday: new Set(),
                sunday: new Set()
            };

	for(let i = 0; i < participants.length; i++) {
		idToIndex[participants[i].id] = i;
		let availability = participants[i].availability;
		let skills = participants[i].skills;


		for(let j = 0; j < availability.length; j++) {
			if(availability[j]) {
				attributes[days[j]].add(participants[i].id); // if participant can schedule this day add their id which is mapped to index
			}
		}

		for(let k = 0; k < skills.length; k++) {
			if(skills[k].name in attributes) {
				attributes[skills[k].name].add(participants[i].id);
				console.log("adding...")
			} else {
				attributes[skills[k].name] = new Set();
				attributes[skills[k].name].add(participants[i].id);

			}
		}
	}
	console.log(attributes)
	let matching = state.matching;
	matching.attributes = attributes;
	matching.idToIndex = idToIndex;

	return Object.assign({}, state, {
		matching: matching
	});
};

let handleFilterParticipants = (state, userId) => {
	let matchingParticipants = new Set();
	for(let key in state.attributes) {
		if(state.attributes.hasOwnProperty(key)) {
			if(userId in state.attributes.key) {
				matchingParticipants = new Set([...matchingParticipants, ...state.attributes.key])
			}
		}
	}

	return Object.assign({}, state, {
		matchingParticipants: matchingParticipants,
		current: userId
	})
};

let handleResetParticipants = (state, payload) => {
	// TODO
};

export {
	handleSortParticipants,
	handleFilterParticipants,
	handleResetParticipants
}