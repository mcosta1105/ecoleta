import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import CreatePoint from './components/pages/CreatePoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/create-point' component={CreatePoint} />
    </BrowserRouter>
  );
};

export default Routes;
