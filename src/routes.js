import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import Layout from './components/layout.js';
// import HomePage from './components/homePage/HomePage'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
  </Route>
);
