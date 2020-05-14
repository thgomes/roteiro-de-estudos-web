import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Subject from './pages/Subject';
import About from './pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subjects/:subject" component={Subject} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
