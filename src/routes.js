import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './components/HomeBanner/HomeBanner';
import Payments from './components/Payments/Payments';
import Challenges from './containers/Challenges/Challenges';
import App from './App';
import Header from './containers/Header/Header';
export default () => {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/payments' component={Payments} />
      </Switch>
    </BrowserRouter>
  )
}