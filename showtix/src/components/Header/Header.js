import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import callCenterIcon from '../../images/icons/call-center.svg';
import cartIcon from '../../images/icons/cart.svg';
import './Header.css';


class Header extends Component {
  toggleNav() {
    this.props.callbackFromParent();
  }

  render() {
    return (
      <div>
        <nav className="showtix-header">
          <div className="container">
            <button className={!this.props.navigationOpen ? 'showtix-header__toggle-navigation' : 'showtix-header__toggle-navigation is-active'} onClick={this.toggleNav.bind(this)}>
              <i></i>
              <i></i>
              <i></i>
            </button>

            <div className="showtix-header__options">
              <div className="showtix-header__call-center">
                <div className="showtix-header__call-center__image">
                  <img src={callCenterIcon} />
                </div>  
                <div className="showtix-header__call-center__text d-flex flex-column align-items-start justify-content-start">
                  Toll-free orders available at
                  <a href="tel:18669678167">1-866-967-8167</a>
                </div>  
              </div>
              <div className="showtix-header__cart">
                <div className="showtix-header__cart__total">
                  0
                </div> 
                <div className="showtix-header__cart__image"> 
                  <img src={cartIcon} />
                </div>  
              </div>
            </div>

            <a className="showtix-header__brand" href="/">
              <img src={logo} />
            </a>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
