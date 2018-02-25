var User = require('../models/user');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var MongoClient = require('mongodb').MongoClient
var mongodburl = "mongodb://<tester>:<testerone>@ds247698.mlab.com:47698/hackillinois"
var mongoose = require('mongoose');

exports.user_register = function(req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var github_name = req.body.github;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
    var response = {};
    if(username === ""){
      response = JSON.stringifyin({"status":"error","message":"username cannot be empty"});
      res.send(response);
    }
    if(email === ""){
      response = JSON.stringify({"status":"error","message":"email cannot be empty"});
      res.send(response);
    }
    if(password === ""){
      response = JSON.stringify({"status":"error","message":"password cannot be empty"});
      res.send(response);
    }
    if(confirmpassword === ""){
      response = JSON.stringify({"status":"error","message":"confirmpassword cannot be empty"});
      res.send(response);
    }
    if(password !== confirmpassword){
      response = JSON.stringify({"status":"error","message":"password and confirmed password do not match"});
      res.send(response);
    }
    mongoose.connect(mongodburl);
    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    // Get the default connection
    var db = mongoose.connection;
    var collection = db.collection('users');
    var user = {};
    collection.findOne({"username" : username}, function(err, result) {
        if (err) { res.send({"status":"error","message":"unknown error"}); }
        if (result != undefined) {
            response = JSON.stringify({"status":"error","message":"user already exist"})
            res.send(response);
          }
        else{
            user = {
            "username": username,
            "password": password,
            "email" : email,
            "project" : null,
            "current_task" : null,
            "avatar" : "",
            "github" : github_name
            };
          }
      })
    console.log("CREATING USER:", username);
    if(user != null) {
      collection.insert(user)
          .then(function () {
          db.close();
          response = JSON.stringify({"status":"ok","message":""})
          res.send(response);
          });
    }
};

exports.user_login = function (req, res, next) {
  var curr_username = req.body.username;
  var curr_password = req.body.password;
  mongoose.connect(mongodburl);
  // Get Mongoose to use the global promise library
  mongoose.Promise = global.Promise;
  // Get the default connection
  var db = mongoose.connection;
  var collection = db.collection('users');
  collection.findOne({"username" : curr_username}, function(err, result) {
  if (err) {  }
      if (result != undefined) {
        console.log(result)
        if(result.password !== curr_password){
          var response = JSON.stringify({"status":"error","message":"user name and password does not match"})
          res.send(response);
        }
        else{
          var response = JSON.stringify({"status":"ok","message":""})
          res.send(response);
        }
      }
      else  {
        var response = JSON.stringify({"status":"error","message":"user does not exist"})
        res.send(response);
      }
    })
};

exports.user_get = function (req, res, next) {
    var curr_username = req.params.username;
    mongoose.connect(mongodburl);
    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    // Get the default connection
    var db = mongoose.connection;
    var collection = db.collection('users');

    //check if username is already assigned in our database
    collection.findOne({'username' : curr_username})
      .then(function (result) {
        if (null != result) {
            res.send(JSON.stringfy(result))
        }
      })
};
