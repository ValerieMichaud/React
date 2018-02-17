import React, { PureComponent } from 'react';

import './Header.css';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  toggleActive(selector) {
    alert('toggleActive');
    const elements = document.body.querySelectorAll(selector);
    for (var i = 0; i < elements.length; ++i) {
      elements[i].classList.add('is-active');
    }
  }

  render() {
    return (
      <div>
        <nav className="showtix-header">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="showtix-header__toggle-navigation js-toggle-navigation js-toggle-active" href="#" onClick={() => this.toggleActive('.js-navigation')}>
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
