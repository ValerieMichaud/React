import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';

let strings = new LocalizedStrings({en,fr});

class PatronNavigation extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div className="showtix-navigation__patron">
        <ul className="showtix-navigation__list">
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.reprintOrders}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.makeDonation}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.contactUs}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.privacyPolicy}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.userAgreement}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.cancelOrder}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.sellWithUs}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.learnAboutUs}</a>
          </li>
        </ul>
      </div> 
    );
  }
}

export default PatronNavigation;