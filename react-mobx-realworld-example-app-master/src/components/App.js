import Header from './Header';
import Navigation from './Navigation';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import PrivateRoute from './PrivateRoute';

import Article from './Article';
import Editor from './Editor';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Settings from './Settings';

import AddEvent from './AddEvent';
import EditEvent from './EditEvent';

@inject('userStore', 'commonStore')
@withRouter
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationOpen: false,
    };
  }

  myCallback = (dataFromChild) => {
    this.setState({
      navigationOpen: !this.state.navigationOpen,
    });
  }


  componentWillMount() {
    if (!this.props.commonStore.token) {
      this.props.commonStore.setAppLoaded();
    }
  }

  componentDidMount() {
    if (this.props.commonStore.token) {
      this.props.userStore.pullUser()
        .finally(() => this.props.commonStore.setAppLoaded());
    }
  }

  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header callbackFromParent={this.myCallback} navigationOpen={this.state.navigationOpen} />
          <Navigation navigationOpen={this.state.navigationOpen} activeRoute={this.props.location.pathname} />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug?" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/@:username" component={Profile} />
            <Route path="/@:username/favorites" component={Profile} />

            <PrivateRoute exact path="/event" component={AddEvent} />
            <PrivateRoute exact path="/event/:id" component={EditEvent} />

            <Route path="/" component={Home} />
          </Switch>
        </div>
      );
    }
    return (
      <Header />
    );
  }
}
