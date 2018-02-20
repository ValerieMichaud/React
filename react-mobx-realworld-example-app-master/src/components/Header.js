import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


@inject('commonStore')
@observer
class Header extends React.Component {
  toggleNavigation = () => {
      this.props.callbackFromParent();
  }

  render() {
    return (
      <div>
        <nav className="showtix-header">
          <div className="container d-flex align-items-center justify-content-between">
            <a className={!this.props.navigationOpen ? 'showtix-header__toggle-navigation' : 'showtix-header__toggle-navigation is-active'} href="javascript:return false;" onClick={() => this.toggleNavigation()}>
              <i></i>
              <i></i>
              <i></i>
            </a>
            <a className="showtix-header__brand" href="/" title={this.props.commonStore.appName.toLowerCase()}></a>
            <span>
              
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
