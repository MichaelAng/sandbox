'use strict';

var express = require('express');
var router = express.Router();

router.get('/', () => { console.log('I am a successful task')});

module.exports = router;
