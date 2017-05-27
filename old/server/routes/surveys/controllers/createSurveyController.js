const HttpStatus = require("http-status-codes");

const Survey = require("../../../models/").Survey;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;


module.exports = function (req, res, next) {
    const userId = req.user._id;
    const payload = req.body;

    const newSurvey = new Survey({
        _creator: userId,
        title: payload.title,
        questions: payload.questions
    });

    newSurvey.save()
        .then(function (newSurvey) {
            const newSurveyId = newSurvey._id;
            User.findOneAndUpdate(
                {_id: userId},
                {
                    // add survey id to user.surveys
                    $push: {
                        "surveys": {_id: newSurveyId}
                    },

                    // set the last modfied date
                    $set: {
                        "lastModifiedTime": Date.now()
                    }
                })
                .exec()
                .then(function (user) {
                    return res.json({
                        survey: newSurvey
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
