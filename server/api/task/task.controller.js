const Task = require('./task.model');

exports.getTasks = function(req, res, next) {
    Task.find()
        .then(() => { return res.status(200).json({status: 'heres all'}); });
};

exports.createTask = function(req, res) {
    Task.create(req.body)
        .then((task) => { return res.status(201).json(task); })
        .catch((err) => { return res.status(404).json(err); });
};
