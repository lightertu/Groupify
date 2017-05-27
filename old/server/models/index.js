/**
 * Created by rui on 5/5/17.
 */
const Activity = require("./Activity");
const Survey = require("./Survey");
const User = require("./User");
const Participant = require("./Participant").Participant;
const ParticipantValidator = require("./Participant").ParticipantValidator;

module.exports = {
    User: User,
    Activity: Activity,
    Survey: Survey,
    Participant: Participant,
    ParticipantValidator: ParticipantValidator,

};
