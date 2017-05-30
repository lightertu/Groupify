/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");

const createErrorHandler = require("../../../utils").createErrorHandler;
const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;



const selectAlgorithmAndReturnFunction = require("../algorithms/").selectAlgorithmAndReturnFunction;

function validateInput(req) {
    return validateParameters(req.params);
}

function validateParameters(prm) {
    return prm.hasOwnProperty('activityId') && prm.hasOwnProperty('algorithmName')
        && typeof prm.activityId === 'string' && typeof prm.algorithmName === 'string'
        && ObjectIdIsValid(prm.activityId);
}



module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }


    const algorithmFcn = selectAlgorithmAndReturnFunction(req.params.algorithmName);
    if (algorithmFcn === null){
        const errorMessage = 'please give valid algorithmName';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }


    const activityId = req.params.activityId;
    const userId     = req.user._id;

    // first find out if the activity exits and is valid
    Activity.findOne({
        _id: activityId, _creator: userId, isDeleted: false, survey: {'$ne': []},
    }).populate({
        path: 'participants',
        select: '_id name groupNumber surveyResponses lastModified',
        match: {isDeleted: false},
        options: {
            sort: {lastModifiedAt: 1}
        }
    })
        .exec()
        .then(function(activity){
            if (activity === null && activity.survey.length !== 1){
                const errorMessage = 'please give the correct activityId or the survey length is not 1';
                createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
                return;
            }

            console.log(algorithmFcn(activity.participants, activity.groupCapacity));

            activity.participants.forEach(function (par) {
                par.save().then(function (par) {
                    // console.log(par);
                }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
            });


            return res.status(HttpStatus.OK).json({
                participants: activity.participants
            });

        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));


};
