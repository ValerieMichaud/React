import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';
import { Navigation } from './common/components/Navigation';
import ExampleRouteHandler from './views/example';

import '../assets/fonts/fonts.css';

const JustAnotherPage = () => (
  <div>
    <h2>This is Just Another Page</h2>
    <p>Please remove this from your route, it is just to show case basic setup for router.</p>
  </div>
);

const AddPage = () => (
  <div>
    <h2>Add</h2>
    <p>Please remove this from your route, it is just to show case basic setup for router.</p>
  </div>
);


const EditPage = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const HeaderWithRouter = withRouter(props => <Header {...props} />);
const NavigationWithRouter = withRouter(props => <Navigation {...props} />);

module.exports = (
  <div className="container">
    <HeaderWithRouter />
    <NavigationWithRouter />
    <hr />
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/page" component={JustAnotherPage} />
        <Route path="/search" component={JustAnotherPage} />
        <Route path="/customer" component={JustAnotherPage} />
        <Route path="/bulk-email" component={JustAnotherPage} />
        <Route path="/events" component={JustAnotherPage} />
        <Route exact path="/event" component={AddPage} />
        <Route path="/event/:id" component={EditPage} />
        <Route path="/tags" component={JustAnotherPage} />
        <Route path="/coupons" component={JustAnotherPage} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
);
