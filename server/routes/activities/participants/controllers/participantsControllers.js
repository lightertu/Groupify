/**
 * Created by rui on 5/9/17.
 */

module.exports = {
    getParticipantsController: function(req, res, next) {
        res.send("get participants ");
    },

    regroupParticipantsController: function(req, res, next) {
        res.send("regroup participants ");
    },

    createParticipantController: function(req, res, next) {
        res.send("created new participant");
    },

    getParticipantController: function(req, res, next) {
        res.send("get one participant");
    },

    updateParticipantController: function(req, res, next) {
        res.send("get one participant");
    },

    deleteParticipantController: function(req, res, next) {
        res.send("delete participant");
    },
};
