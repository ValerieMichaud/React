import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatronNavigation extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div className="showtix-navigation__patron">
        <ul className="showtix-navigation__list">
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Reprint orders</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Make a donation</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Contact us</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Privacy policy</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">User agreement</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Cancel order</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Sell with us</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Learn about us</a>
          </li>
        </ul>
      </div> 
    );
  }
}

export default PatronNavigation;