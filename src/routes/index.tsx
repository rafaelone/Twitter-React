import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Profile} />
    <Route path="*" component={Profile} />
  </Switch>
);

export default Routes;
