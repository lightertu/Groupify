const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../utils").createErrorHandler;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Activity = require("../../../models").Activity;

const sendGridAPIKey = require("../../../config/main").SENDGRID_API_KEY;



function groupParticipantsByGroupNumber (pars) {
    let groupList = [];
    pars.forEach(function (par) {
        // iterate all the group in groupList, if there exits that group number, add par to it, and return
        for (let i=0; i<groupList.length; i++){
            const group = groupList[i];
            if (group.groupNumber === par.groupNumber){
                group.groupMembers.push(par);
                return ;
            }
        }
        // didn't find the group in groupList, create a group and add to groupList
        groupList.push({
            groupNumber: par.groupNumber,
            groupMembers: [par],
        });
    });

    return groupList;
}


function generateHTMLText (participant, group, activity) {
    const participantName = participant.name;
    let partnerNameList = [];
    group.groupMembers.forEach(function (member) {
        if (member._id !== participant._id) {
            partnerNameList.push(member.name);
        }
    })
    let text = "<b>Dear " + participantName + ",<br>"
        + 'Congratulations! You are now in the group number ' + participant.groupNumber + ".<br>";

    if (partnerNameList.length === 0){
        text += 'Currently, you are the only one in this group. We would add more people to your group!<br><br>';
    }
    else if (partnerNameList.length === 1){
        text += 'Your partners are ' + partnerNameList[0] + "!<br><br>";
    }
    else{
        text += 'Your partners are ';
        for (let i = 0; i < partnerNameList.length - 1; i++) {
            text += partnerNameList[i] + ", ";
        }
        text += partnerNameList[partnerNameList.length -1] + ".<br><br>";
    }
    return text + "Thank you for attending '" + activity.title + "'!</b>";
}


function validateInput(req) {
    return validateParameters(req.params) ;
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && typeof prm.activityId === 'string'
        && ObjectIdIsValid(prm.activityId);
}


module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct activityID in URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }
	console.log('HERE')
    if (typeof sendGridAPIKey === 'undefined' || sendGridAPIKey === null){
        const errorMessage = 'Server terminal does not have the environment variable "SENDGRID_API_KEY". Please run the related bash script first.';
        createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR)(errorMessage);
        return;
    }

	console.log('HERE2')
    const sendGrid = require("sendgrid")(sendGridAPIKey);
    const mailHelper = require('sendgrid').mail;

    Activity.findOne({_id: req.params.activityId, _creator: req.user._id, isDeleted: false})
        .populate({
            path: 'participants',
            select: 'name email groupNumber',
            match: {isDeleted: false, groupNumber: {'$nin': [-1, -2] } },
        })
        .exec()
        .then(function (activity) {
            if (activity === null) {
                const errorMessage = "Cannot find activity: " + req.params.activityId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            const groupList = groupParticipantsByGroupNumber(activity.participants);

            groupList.forEach(function (group) {
                group.groupMembers.forEach(function (member) {

                    // send mail
                    const from_email = new mailHelper.Email('noreply-teamdivider@leftpad.com');
                    const to_email   = new mailHelper.Email(member.email);
                    const subject    = 'Activity Notification: Group Information';
                    const content    = new mailHelper.Content('text/html', generateHTMLText(member, group, activity));
                    const email       = new mailHelper.Mail(from_email, subject, to_email, content);

                    const emailRequest = sendGrid.emptyRequest({
                        method: 'POST',
                        path: '/v3/mail/send',
                        body: email.toJSON()
                    });

                    sendGrid.API(emailRequest, function (error, response) {
                        if (error !== null){
                            console.log(error);
                            return;
                        }
                        // console.log(response.statusCode)
                        // console.log(response.body)
                        // console.log(response.headers)
                        console.log("---success in sending email---");
                    })

                })

            });


            return res.status(HttpStatus.OK).json({
                groupList: groupList,
            })
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};

// function generateEmailText (participant, group, activity) {
//     const participantName = participant.name;
//     let partnerNameList = [];
//     group.groupMembers.forEach(function (member) {
//         if (member._id !== participant._id) {
//             partnerNameList.push(member.name);
//         }
//     })
//     let text = "Dear " + participantName + ",\n"
//             + 'Congratulations! You are now in the group number ' + participant.groupNumber + ".\n";
//
//     if (partnerNameList.length === 0){
//         text += 'Currently, you are the only one in this group. We would add more people to your group!\n\n';
//     }
//     else if (partnerNameList.length === 1){
//         text += 'Your partners is ' + partnerNameList[0] + "!\n\n";
//     }
//     else{
//         text += 'Your partners are ';
//         for (let i = 0; i < partnerNameList.length - 1; i++) {
//             text += partnerNameList[i] + ", ";
//         }
//         text += partnerNameList[partnerNameList.length -1] + ".\n\n";
//     }
//     return text + "Thank you for attending '" + activity.title + "'!";
// }

