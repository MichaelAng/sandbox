'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    createdDate: {
        default: Date.now,
        type: Date
    },
    name: {
        type: String
    },
    detail: {
        type: String
    },
    isDone: {
        default: false,
        type: Boolean
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
