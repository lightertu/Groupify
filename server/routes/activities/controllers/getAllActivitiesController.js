const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    // TODO: check if the all the inputs including url parameters and payload is valid
    function validateInput() {
        return true;
    }

    // save a new activity to to the database
    if (!validateInput()) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
    }

    User.findOne({_id: req.user._id})
        .populate({
            path: 'activities',
            select: 'name groupCapacity totalCapacity endDate lastModified participants',
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