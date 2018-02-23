import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  toggleNav() {
    this.props.callbackFromParent();
  }

  render() {
    return (
      <div>
        <nav className="showtix-header">
          <div className="container d-flex align-items-center justify-content-between">
            <button className={!this.props.navigationOpen ? 'showtix-header__toggle-navigation' : 'showtix-header__toggle-navigation is-active'} onClick={this.toggleNav.bind(this)}>
              <i></i>
              <i></i>
              <i></i>
            </button>
            <a className="showtix-header__brand" href="/"></a>
            <span></span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
