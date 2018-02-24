var Task = require('../models/task')

exports.task_get = function (req, res, next) {

    //res.send("NOT IMPLEMENTED: task get");
};

exports.task_post = function (req, res, next) {
    var pretasks = req.body.prerequisite.split(',');
    var followtasks = req.body.following.split(',');
    var task = new Task({
        name: req.body.name,
        status: req.body.status,
        assigned_user = req.body.assigned_user,
        due_date: req.body.due_date,
        description: req.body.description,
        //TODO: prerequisite, following

    });
    //res.send("NOT IMPLEMENTED: task post");
};

exports.task_put = function (req, res, next) {
    res.send("NOT IMPLEMENTED: task put");
};

exports.task_user_get = function (req, res, next) {
    res.send("NOT IMPLEMENTED: task user get");
};