/**
 * Created by rui on 5/16/17.
 */
const HttpStatus = require("http-status-codes");

const createErrorHandler = require("../../../utils").createErrorHandler;
const Activity = require("../../../../models/").Activity;
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
        _id: activityId, _creator: userId, isDeleted: false,
    }).exec().then(function (activity) {

        if (activity === null){
            const errorMessage = 'please give the correct activityId';
            createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            return;
        }

        // then we try to find the participant by activityID and other constraints
        Participant.find({
            // _activity: activityId, groupNumber: {'$nin': activity.lockedGroups}, isDeleted: false,
            _activity: activityId, isDeleted: false,
        }).sort({ lastModifiedAt: 1 })
            .exec()
            .then(function (pars) {

                let filteredPars = [];
                let lockedPars = [];
                let parsToShowUp = [];

                pars.forEach(function (par) {
                    if ( activity.lockedGroups.indexOf(par.groupNumber) === -1){
                        filteredPars.push(par);
                    }
                    else{
                        lockedPars.push(par);
                    }
                });

                // whatever the pars are empty or not, we go with algorithm, save and print the result
                algorithmFcn(filteredPars, activity.groupCapacity, activity.lockedGroups);

                filteredPars.forEach(function (par) {
                    par.save().then(function (par) {
                    }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
                });

                // combine these two pars array to one since the pars should always be sorted by lastmodified
                lockedPars.forEach(function (par) {
                    parsToShowUp.push(par.getTestFields())
                });
                filteredPars.forEach(function (par) {
                    parsToShowUp.push(par.getTestFields())
                });

                return res.status(HttpStatus.OK).json({
                    participants: parsToShowUp,
                });

            }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

    }).catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));


};
