const HttpStatus = require("http-status-codes");
const validator = require('validator');

const User = require("../../../models/").User;
const Survey = require("../../../models").Survey;
const createErrorHandler = require("../../utils").createErrorHandler;




module.exports = function (req, res, next) {
    //
    // if (!validateInput(req)) {
    //     const errorMessage = 'please give the correct payload';
    //     createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
    //     return;
    // }


    const surveyId = req.params.surveyId,
        userId = req.user._id;

    Survey.findOneAndUpdate(
        {
            _id: surveyId, _creator: userId, isDeleted: false},
        {
            $set: {
                "title": req.body.title,
            }
        }
        // ,
        // this select the properties to show
        // {
        //     projection: {
        //         "name": 1,
        //         "endDate": 1,
        //         "totalCapacity": 1,
        //         "groupCapacity": 1,
        //         "participants": 1,
        //     },
        //     new: true,
        // }
    )
        .exec()
        .then(function (survey) {
            if (survey === null) {
                const errorMessage = "Cannot find survey has id: " + surveyId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.json({
                survey: survey
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
