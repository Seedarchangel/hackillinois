var Task = require('../models/task')

exports.task_list_get = function (req, res, next) {
    var taskQuery = Task.find({
        project: req.body.project_name
    })
    var finishedTasks = [];
    taskQuery.select({
        status: 'finished'
    }).exec(function (err, results) {
        if (err) {
            return next(err);
        }
        results.forEach(function (element) {
            finishedTasks.push(element.toObject().name)
        });
    });
    var unassignedTasks = [];
    taskQuery.select({
        status: 'unassigned'
    }).exec(function (err, results) {
        if (err) {
            return next(err);
        }
        results.forEach(function (element) {
            unassignedTasks.push(element.toObject().name)
        });
    });
    var inProgressTasks;
    taskQuery.select({
        status: 'in_progress'
    }).exec(function (err, results) {
        if (err) {
            return next(err);
        }
        inProgressTasks = results;
    });
    res.json({
        task_finished: finishedTasks,
        task_unassigned: unassignedTasks,
        task_in_progress: inProgressTasks
    });
};

exports.task_post = function (req, res, next) {
    //TODO: async here
    var pretasks = req.body.prerequisite.split(',');
    var followtasks = req.body.following.split(',');
    var p_tasks, f_tasks;
    Task.find({
        name: {
            $in: pretasks
        }
    }).exec(function (err, result) {
        p_tasks = result;
    });
    Task.find({
        name: {
            $in: followtasks
        }
    }).exec(function (err, result) {
        f_tasks = result;
    });
    var task = new Task({
        name: req.body.name,
        status: req.body.status,
        assigned_user = req.body.assigned_user,
        due_date: req.body.due_date,
        description: req.body.description,
        prerequisite = p_tasks,
        following = f_tasks
    });
    project.save(function (err) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Create task error.'
            });
        } else {
            res.json({
                status: 'ok',
                message: 'Create task successful.'
            });
        }
    });
    //res.send("NOT IMPLEMENTED: task post");
};

exports.task_put = function (req, res, next) {
    var task = new Task({
        name: req.body.name,
        status: req.body.status,
        assigned_user: req.body.assigned_user,
        due_date: req.body.due_date,
        description: req.body.description,
        prerequisite: req.body.prerequisite,
        following: req.body.project
    });
    Task.findOneAndUpdate({
        name: req.body.name
    }, task, {}, function (err, thetask) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Update task error.'
            });
        } else {
            res.json({
                status: 'ok',
                message: 'Update task successful.'
            });
        }
    });
};

exports.task_user_get = function (req, res, next) {
    Task.find({
        assigned_user: req.body.username
    }).lean().exec(function (err, result) {
        res.send(result);
    });
};