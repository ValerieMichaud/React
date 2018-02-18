import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Event } from './common/components/Event';
import ExampleRouteHandler from './views/example';

import '../assets/fonts/fonts.css';

const JustAnotherPage = () => (
  <div>
    <ExampleRouteHandler />
    <h2>This is Just Another Page</h2>
    <p>Please remove this from your route, it is just to show case basic setup for router.</p>
  </div>
);

const AddPage = () => (
  <div>
    <ExampleRouteHandler />
    <h2>Add page</h2>
    <Event />
  </div>  
);


const EditPage = ({ match }) => (
  <div>
    <ExampleRouteHandler />
    <h2>Edit page</h2>
    <Event id={match.params.id} />
  </div>  
);



module.exports = (
  <div className="container">
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/page" component={JustAnotherPage} />
        <Route path="/search" component={JustAnotherPage} />
        <Route path="/customer" component={JustAnotherPage} />
        <Route path="/bulk-email" component={JustAnotherPage} />
        <Route path="/events" component={JustAnotherPage} />
        <Route exact path="/event" component={AddPage} />
        <Route exact path="/event/:id" component={EditPage} />
        <Route path="/tags" component={JustAnotherPage} />
        <Route path="/coupons" component={JustAnotherPage} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
);
