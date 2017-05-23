/**
 * Created by rui on 5/5/17.
 */


const User = require("./User").User;
const UserLoginInfoValidator = require("./User").UserLoginInfoValidator;
const UserProfileValidator = require("./User").UserProfileValidator;


const Activity = require("./Activity").Activity;
const ActivityValidator = require("./Activity").ActivityValidator;


const Participant = require("./Participant").Participant;
const ParticipantValidator = require("./Participant").ParticipantValidator;

const Survey = require("./Survey").Survey;


module.exports = {

    User: User,
    UserProfileValidator: UserProfileValidator,
    UserLoginInfoValidator : UserLoginInfoValidator,

    Activity: Activity,
    ActivityValidator : ActivityValidator,

    Participant: Participant,
    ParticipantValidator: ParticipantValidator,

    Survey: Survey,
};
