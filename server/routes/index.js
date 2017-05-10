/**
 * Created by rui on 5/9/17.
 */
const express = require('express')
    , router = express.Router();

router.use('/auth', require('./auth'));
router.use('/activities', require('./activities'));
router.use('/user', require('./user'));

module.exports = router;