import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AdminNavigation } from '../AdminNavigation';
import { PatronNavigation } from '../PatronNavigation';

import './Navigation.css';

class Navigation extends PureComponent {
  render() {
    const { pathname } = this.props.location;

    const isAdmin = true;
    const AdminNavigationWithRouter = withRouter(props => <AdminNavigation {...props} />);
    const PatronNavigationWithRouter = withRouter(props => <PatronNavigation {...props} />);

    if (isAdmin) {
      return (
        <div>
          <nav className={!this.props.navigationOpen ? 'showtix-navigation' : 'showtix-navigation is-active'} >
            <AdminNavigationWithRouter />
            <PatronNavigationWithRouter />
          </nav>
        </div>    
      );
    }
    return (
      <div>
        <nav className={!this.props.navigationOpen ? 'showtix-navigation' : 'showtix-navigation is-active'} >
          <PatronNavigationWithRouter />
        </nav>
      </div> 
    )
  }
}

export default Navigation;
