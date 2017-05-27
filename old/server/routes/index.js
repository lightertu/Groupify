/**
 * Created by rui on 5/9/17.
 */
const express = require('express')
    , router = express.Router()
    , createErrorHandler = require('./utils').createErrorHandler
    , HttpStatus = require('http-status-codes');

router.use('/auth', require('./auth'));
router.use('/activities', require('./activities'));
router.use('/user', require('./user'));
router.use('/surveys', require('./surveys'));

router.use(function(req, res, next) {
    if (!req.route)
        return createErrorHandler(res, HttpStatus.NOT_FOUND)("404");
    next();
});

module.exports = router;
