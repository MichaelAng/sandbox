'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./task.controller')

router.get('/', controller.getTasks);
router.get('/:id', controller.getTaskById);
router.delete('/:id', controller.deleteTask);
router.post('/create', controller.createTask);
router.put('/:id', controller.updateTask);

module.exports = router;
