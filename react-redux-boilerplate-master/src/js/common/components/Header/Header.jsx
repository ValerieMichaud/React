import React, { PureComponent } from 'react';
import type { showtixType } from '../../types/showtix';

import './Header.css';

class Header extends PureComponent {
  someFn = () => {
      this.props.callbackFromParent();
  }

  render() {
    return (
      <div>
        <nav className="showtix-header">
          <div className="container d-flex align-items-center justify-content-between">
            <a className={!this.props.navigationOpen ? 'showtix-header__toggle-navigation' : 'showtix-header__toggle-navigation is-active'} href="javascript:return false;" onClick={() => this.someFn()}>
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
