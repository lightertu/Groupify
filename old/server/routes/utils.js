/**
 * Created by rui on 5/16/17.
 */
module.exports = {
    createErrorHandler: function(res, errorCode) {
        return function(err) {
            res.status(errorCode);
            return res.json({
                error: err
            })
        }
    },
};
