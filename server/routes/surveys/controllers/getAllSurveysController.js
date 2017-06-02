const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    // no input check here

    User.findOne({_id: req.user._id})
        .populate({
            path: 'surveys',
            select: 'title createdAt questions color',
            match: {isDeleted: false}
        })
        .exec()
        .then(function (user) {
            return res.json({
                surveys: user.surveys,
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
