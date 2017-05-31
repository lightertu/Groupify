const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    // no input check here

    User.findOne({_id: req.user._id})
        .populate({
            path: 'activities',
            select: 'title groupCapacity totalCapacity endDate lastModified participants currentCapacity color',
            match: {isDeleted: false}
        })
        .exec()
        .then(function (user) {
            return res.json({
                activities: user.activities,
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
