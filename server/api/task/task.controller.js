const Task = require('./task.model');

exports.getTasks = (req, res, next) => {
    Task.find()
        .then( task => res.status(200).json({status: 'heres all'}) );
};

exports.createTask = (req, res) => {
    Task.create(req.body)
        .then( task => res.status(201).json(task) )
        .catch( err => res.status(404).json(err) );
};
