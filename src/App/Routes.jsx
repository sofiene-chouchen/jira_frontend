import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import '../index.css';
import history from 'browserHistory';
import Project from 'Project';
import Login from 'Project/Login/index';
import Register from 'Project/Register/index';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import Dashboard from 'Project/Dashboard';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
