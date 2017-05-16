const Activity = require("../../../models/").Activity
const User = require("../../../models/").User

// create an activity

// TODO: check if the payload is valid
function checkPayload (payload) {
    return payload !== null
}

module.exports = function (req, res, next) {
    const userId = req.user._id
    const payload = req.body

    // save a new activity to to the database
    if (checkPayload(payload)) {
        const newActivity = new Activity({
            _creator: userId,
            name: payload.name,
            groupCapacity: payload.groupCapacity,
            totalCapacity: payload.totalCapacity,
            //endDate: payload.endDate,
        })

        newActivity.save()
            .then(function (newActivity) {
                let query = User.findOneAndUpdate(
                    {_id: userId},
                    {
                        $push: {
                            "activities": {_id: newActivity._id}
                        },
                        $set: {
                            "lastModifiedTime": Date.now()
                        }
                    })

                query.exec()
                    .then(function (user) {
                        console.log("update successful")
                        return res.json({
                            success: true,
                            message: 'activity ' + newActivity.name + ' is saved to the database'
                        })
                    })
                    .catch(function (err) {
                        // TODO: choose a status code
                        console.log(err)
                        return res.json({
                            success: true,
                            message: err
                        })
                    })
            })

            // add the new activityId to user
            .catch(function (err) {
                // TODO: choose a status code
                return res.json({
                    success: false,
                    message: err
                })
            })
    } else {
        // TODO: choose a status code
        res.json({
            success: false,
            message: 'please give the correct payload',
        })
    }
}
