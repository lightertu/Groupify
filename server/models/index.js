/**
 * Created by rui on 5/5/17.
 */
<<<<<<< HEAD

const User = require("./User").User;
const UserLoginInfoValidator = require("./User").UserLoginInfoValidator;
const UserProfileValidator = require("./User").UserProfileValidator;


const Activity = require("./Activity").Activity;
const ActivityValidator = require("./Activity").ActivityValidator;

=======
const Activity = require("./Activity");
const Survey = require("./Survey");
const User = require("./User");
>>>>>>> 888810319e21c064d2037920acd65b8a03b51e17
const Participant = require("./Participant").Participant;
const ParticipantValidator = require("./Participant").ParticipantValidator;


module.exports = {

    User: User,
    UserProfileValidator: UserProfileValidator,
    UserLoginInfoValidator : UserLoginInfoValidator,

    Activity: Activity,
<<<<<<< HEAD
    ActivityValidator : ActivityValidator,

=======
    Survey: Survey,
>>>>>>> 888810319e21c064d2037920acd65b8a03b51e17
    Participant: Participant,
    ParticipantValidator: ParticipantValidator,

};
