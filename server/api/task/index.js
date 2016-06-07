'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./task.controller')

router.get('/', controller.getTasks);
router.post('/create', controller.createTask);

module.exports = router;
