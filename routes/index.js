var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var project_controller = require('../controllers/projectController');
var task_controller = require('../controllers/taskController');
var graph_controller = require('../controllers/graphController');

/* GET home page. */
router.get('/', function (req, res, next) {
    //TODO: modify index page here
    res.render('index', {
        title: 'Express'
    });
});

router.post('/api/register', user_controller.user_register);

router.post('/api/login', user_controller.user_login);

router.get('/api/user', user_controller.user_get);

router.get('/api/project/:project_name', project_controller.project_get);

router.post('/api/project', project_controller.project_post);

router.post('/api/task', task_controller.task_post);

router.get('/api/task/:project_name/list/', task_controller.task_list_get);

router.put('/api/task', task_controller.task_put);

router.get('/api/task/user/:username', task_controller.task_user_get);

router.get('/api/graph/:project_name', graph_controller.graph_get);

module.exports = router;