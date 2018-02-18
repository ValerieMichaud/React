import React, { Component, Fragment } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from '../../common/components/Header';
import { Navigation } from '../../common/components/Navigation';

require('../../../style/index.css');

const HeaderWithRouter = withRouter(props => <Header {...props} />);
const NavigationWithRouter = withRouter(props => <Navigation {...props} />);

class ExampleView extends Component {
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

  render() {
    return (
      <div>
        <HeaderWithRouter callbackFromParent={this.myCallback} navigationOpen={this.state.navigationOpen} />
        <NavigationWithRouter navigationOpen={this.state.navigationOpen} />
      </div>
    )
  }
}

export default ExampleView;
