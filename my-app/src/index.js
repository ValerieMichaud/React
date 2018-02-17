import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Navigation from './Navigation';

const Main = () => (
  <div>
    <Header />
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </div>
)

ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  ), document.getElementById('root'));