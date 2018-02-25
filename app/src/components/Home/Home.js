import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import styles from './Home.css'
import Login from "../login/login.js"
import Register from "../register/register.js"
import Project from "../project/project.js"
import UserHome from "../user_home/user_home.js"
import Graph from "../graph/graph.js"
import CreateProject from "../create_project/create_project.js"
import Task from "../task/task.js"
class Home extends Component {

    render() {
        return(
            <Router>
                  <Switch>
                      <Route exact path="/" render={()=>{
                          return <Redirect to="/login"/>;
                      }}/>
                      <Route exact path="/login" render={()=>{
                          return <Login />;
                      }} />
                      <Route exact path="/register" render={()=>{
                          return <Register />
                      }} />
                      <Route exact path="/user_home" render={()=>{
                          return <UserHome />;
                      }} />
                      <Route exact path="/graph" render={()=>{
                          return <Graph />;
                      }} />
                      <Route exact path="/project" render={()=>{
                          return <Project />
                      }} />
                      <Route exact path="/create_project" render={()=>{
                          return <Task />
                      }} />
                  </Switch>
            </Router>
        )
    }
}

export default Home
