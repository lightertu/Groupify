/**
 * Created by rui on 5/5/17.
 */
const Activity = require("./Activity");
const User = require("./User");
const Participant = require("./Participant").Participant;
const ParticipantValidator = require("./Participant").ParticipantValidator;

module.exports = {
    User: User,
    Activity: Activity,
    Participant: Participant,
    ParticipantValidator: ParticipantValidator,

};
