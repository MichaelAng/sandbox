const Task = require('./task.model');

exports.createTask = (req, res, next) => {
    Task.create(req.body)
        .then( task => res.status(201).json(task) )
        .catch( err => res.status(404).json(err) );
};

exports.deleteTask = (req, res, next) => {
    let id = req.params.id;
    Task.findByIdAndRemove(id)
        .then( task => res.status(201).json(task) )
        .catch( err => res.status(404).json(err) );
};

exports.getTaskById = (req, res, next) => {
    let id = req.params.id;
    Task.findById(id)
        .then( task => res.status(200).json(task) )
        .catch( err => res.status(404).json(err) );
};

exports.getTasks = (req, res, next) => {
    Task.find()
        .then( tasks => res.status(200).json(tasks) )
        .catch( err => res.status(404).json(err) );
};

exports.updateTask = (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    let options = {new: true};
    Task.findByIdAndUpdate(id, body, options)
        .then( task => res.status(200).json(task) )
        .catch( err => res.status(404).json(err) );
};
