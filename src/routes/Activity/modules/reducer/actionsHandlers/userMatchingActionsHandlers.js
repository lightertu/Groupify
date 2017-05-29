import { Map } from "immutable"

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

	let update = state.setIn(["matching", "attributes", attributes]);
	update = update.setIn(["matching", "idToIndex", idToIndex]);
	return update;
};

let handleFilterParticipants = (state, userId) => {
	let matchingParticipants = new Set();
	let matchingCriteria = new Set();
	let attributes = state.getIn(["matching", "attributes"]);
	const [...keys] = attributes.keys();

	for(var key in keys[0])  {
		// if(attributes.hasOwnProperty(key)) {
			if(attributes.keySeq().first()[key].has(userId)) { 
				matchingCriteria.add(key)
				matchingParticipants = new Set([...matchingParticipants, ...attributes.keySeq().first()[key]]); // merges sets
			}
		// }
	};

	let update = state.setIn(["matching", "current"], userId);
	update = update.setIn(["matching", "matchingParticipants"], matchingParticipants);
	update = update.setIn(["matching", "matchingCriteria"], matchingCriteria);
	return update;
};

let handleResetParticipants = (state, payload) => {
	// TODO
};

export {
	handleSortParticipants,
	handleFilterParticipants,
	handleResetParticipants
}