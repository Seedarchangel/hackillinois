var User = require('../models/user');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var MongoClient = require('mongodb').MongoClient
var mongodburl = "mongodb://<tester>:<testerone>@ds247698.mlab.com:47698/hackillinois"

exports.user_register = function(req, res, next) {
    var username = req.post["username"];
    var email = req.post["email"];
    var github_name = req.post["github_name"];
    var password = req.post["password"];
    var confirmpassword = req.post["confirmpassword"];
    var response;
    if(username === ""){
      response = JSON.parse({"status":"error","message":"username cannot be empty"})
      res.send(response);
    }
    if(email === ""){
      response = JSON.parse({"status":"error","message":"email cannot be empty"})
      res.send(response);
    }
    if(password === ""){
      response = JSON.parse({"status":"error","message":"password cannot be empty"})
      res.send(response);
    }
    if(confirmpassword === ""){
      response = JSON.parse({"status":"error","message":"confirmpassword cannot be empty"})
      res.send(response);
    }
    if(password === confirmpassword){
      response = JSON.parse({"status":"error","message":"password and confirmed password do not match"})
      res.send(response);
    }
    MongoClient.connect(mongodbUrl, function (err, db) {
    var collection = db.collection('users');
    collection.findOne({'username' : username})
      .then(function (result) {
        if (null != result) {
          response = JSON.parse({"status":"error","message":"user already exist"})
          res.send(response);
        }
        else  {
          var user = {
            "username": username,
            "password": password,
            "email" : email,
            "project" : null,
            "current_task" : null,
            "avatar" : "",
            "github" : github_name
          }

          console.log("CREATING USER:", username);

          collection.insert(user)
            .then(function () {
              db.close();
              response = JSON.parse({"status":"ok","message":""})
              res.send(response);
            });
        }
      });
  });

};

exports.user_login = function (req, res, next) {
  var curr_username = req.post["username"];
  var curr_password = req.post["password"];
  MongoClient.connect(mongodbUrl, function (err, db) {
  var collection = db.collection('localUsers');

  //check if username is already assigned in our database
  collection.findOne({'username' : curr_username})
    .then(function (result) {
      if (null != result) {
        if(result.body.password !== curr_password){
          var response = JSON.parse({"status":"error","message":"user name and password does not match"})
          res.send(response);
        }
        else{
          var response = JSON.parse({"status":"ok","message":""})
          res.send(response);
        }
      }
      else  {
        var response = JSON.parse({"status":"error","message":"user does not exist"})
        res.send(response);
      }
    })
  });
};

exports.user_get = function (req, res, next) {
    var curr_username = req.post["username"];
    MongoClient.connect(mongodbUrl, function (err, db) {
    var collection = db.collection('localUsers');

    //check if username is already assigned in our database
    collection.findOne({'username' : curr_username})
      .then(function (result) {
        if (null != result) {
            res.send(JSON.stringfy(result))
        }
      })
    })
};
