let handlerSortParticipants = (start, participants) => {
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
		let availability = participants.availability;
		let skills = participants.skills;

		for(let j = 0; j < availability.length; j++) {
			if(availability[j]) {
				attributes[days[j]].add(i); // if participant can schedule this day add their index
			}
		}

		for(let k = 0; k < skills.length; k++) {
			if(skills[k] in attributes) {
				attributes[skills[k]].add(i);
			} else {
				attributes[skills[k]] = new Set();
				attributes[skills[k]].add(i);
			}
		}
	}

	return Object.assign({}, state, {
		attributes: attributes
	});
};

let handlerFilterParticipants = (start, userId) => {
	let matchingParticipants = new Set();
	for(let key in state.attributes) {
		if(state.attributes.hasOwnProperty(key)) {
			if(userId in state.attributes.key) {
				matchingParticipants = new Set([...matchingParticipants, ...state.attributes.key])
			}
		}
	}

	return Object.assign({}, state, {
		matchingParticipants: matchingParticipants
	})
};

let handlerResetParticipants = (start, payload) => {
	
};

export {
	handlerSortParticipants,
	handlerFilterParticipants,
	handlerResetParticipants
}