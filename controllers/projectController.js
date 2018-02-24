var Project = require('../models/project')

exports.project_get = function (req, res, next) {
    Project.findOne({
        name: req.body.project_name
    }).lean().exec(function (err, result) {
        if (err) {
            return next(err);
        }
        if (result === null) {
            var err = new Error('Project not found.');
            err.status = 404;
            return next(err);
        }
        res.send(JSON.stringify(result));
    })
};

exports.project_post = function (req, res, next) {
    var project = new Project({
        name: req.body.name,
        description: req.body.project_description,
        repo: req.body.repo_name
    });
    project.save(function (err) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Create project error.'
            });
        } else
            res.json({
                status: 'ok',
                message: 'Creation successful.'
            });
    })
};