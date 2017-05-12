/**
 * Created by rui on 5/9/17.
 */

const jwtDecode = require('jwt-decode');

module.exports = {
    getUserProfileController: function(req, res, next) {
        let email = getEmailFromToken (req);

        if (email !== null){
            res.send(email);
        }
        else{
            res.json({
                success: false,
                message: "Unable get email from token",
            });
        }
    },

    updateUserProfileController: function(req, res, next) {
        res.send("updated user profile");
    },
};


function getEmailFromToken (req){
    let token = req.headers.authorization;

    if (token) {
        let payload = jwtDecode(token);
        if (payload.hasOwnProperty('email')){
            return payload.email;
        }
    }

    return null;


}
