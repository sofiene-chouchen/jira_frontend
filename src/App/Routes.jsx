import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import '../index.css';
import history from 'browserHistory';
import Project from 'Project';
import Login from 'Project/Login/index';
import Register from 'Project/Register/index';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import Dashboard from 'Project/Dashboard';
import AddProject from 'Project/ProjectCreate/Index';
import Users from 'Project/Dashboard/Users/Index';
import UserCreation from 'Project/Dashboard/Users/userCreation/Index';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project/:id" component={Project} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/addProject" component={AddProject} />
      <Route path="/users" component={Users} />
      <Route path="/userCreation" component={UserCreation} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
