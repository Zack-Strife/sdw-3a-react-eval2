import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Delete from './components/delete';
import Users from './components/users';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/users" component={Users} />		
    <Route path="/delete" component={Delete} />
  </Router>
);

export default Routes;