'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    createdDate: {
        default: Date.now,
        type: Date
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
