var Project = require('../models/project')

exports.graph_get = function (req, res, next) {
    Project.findById(req.params.project_name).lean().exec(function (err, result) {
        res.send(result.task);
    });
}