const User = require("../../../models/").User;

module.exports = function (req, res, next) {
    User.findOne({_id: req.user._id})
        .populate({
            path: 'activities',
            select: '_creator name groupCapacity totalCapacity endDate lastModified participants isDeleted',
            match:  { isDeleted: false }
        })
        .exec()
        .then(function (user) {
            return res.json({
                success: true,
                userActivities: user.activities,
            });
        })
        .catch(function (err) {
            console.log(err);
        });
};