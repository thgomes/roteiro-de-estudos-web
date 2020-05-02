import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Subject from './pages/Subject';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subject" component={Subject} />
    </Switch>
  );
}
