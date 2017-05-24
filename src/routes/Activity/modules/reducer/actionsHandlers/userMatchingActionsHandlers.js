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
		idToIndex[participants[i].participantId] = i;
		let availability = participants[i].availability;
		let skills = participants[i].skills;


		for(let j = 0; j < availability.length; j++) {
			if(availability[j]) {
				attributes[days[j]].add(participants[i].participantId); // if participant can schedule this day add their id which is mapped to index
			}
		}

		for(let k = 0; k < skills.length; k++) {
			if(skills[k].name in attributes) {
				attributes[skills[k].name].add(participants[i].participantId);
			} else {
				attributes[skills[k].name] = new Set();
				attributes[skills[k].name].add(participants[i].participantId);

			}
		}
	}

	let matching = state.matching;
	matching.attributes = attributes;
	matching.idToIndex = idToIndex;

	return Object.assign({}, state, {
		matching: matching
	});
};

let handleFilterParticipants = (state, userId) => {
	let matchingParticipants = new Set();
	let attributes = state.matching.attributes;
	for(let key in attributes) {
		if(attributes.hasOwnProperty(key)) {
			if(attributes[key].has(userId)) {
				matchingParticipants = new Set([...matchingParticipants, ...attributes[key]]); // merges sets
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