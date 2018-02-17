import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="showtix-header">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="showtix-header__toggle-navigation js-toggle-navigation js-toggle-active" href="#" data-target=".js-navigation, .js-toggle-navigation">
              <i></i>
              <i></i>
              <i></i>
            </a>
              <a className="showtix-header__brand" href="/"></a>
              <span></span>
          </div>
      </nav>
      </div>
    );
  }
}

export default Header;