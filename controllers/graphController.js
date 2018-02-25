var Project = require('../models/project')

exports.graph_get = function (req, res, next) {
    Project.findById(req.body.project_name).lean().exec(function (err, result){
        res.send(result.task);
    });
}