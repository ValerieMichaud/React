import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';

let strings = new LocalizedStrings({en,fr});

class AdminNavigation extends Component {
  render() {
    const { pathname } = this.props.location;

    const isBoxOffice = pathname === '/events';
    const isSearch = pathname === '/search';
    const isAddCustomer = pathname === '/customer';
    const isAddEvent = pathname === '/event';
    const isManageCoupons = pathname === '/coupons';

    return (
      <div className="showtix-navigation__client">
        <div className="showtix-badge showtix-background__grey-3">
          Management
        </div>
        <ul className="showtix-navigation__list">
          <li className={!isBoxOffice ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
            <Link className="showtix-navigation__link" to="/events">{strings.boxOffice}</Link>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.customers}</a>
            <ul className="showtix-navigation__sublist">
              <li className={!isSearch ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/search">{strings.search}</Link>
              </li>
              <li className={!isAddCustomer ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/customer">{strings.add}</Link>
              </li>
            </ul>
          </li>
          <li className={!isBoxOffice ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
            <Link className="showtix-navigation__link" to="/events">{strings.events}</Link>
            <ul className="showtix-navigation__sublist">
              <li className={!isAddEvent ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/event">{strings.createEvent}</Link>
              </li>
            </ul>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.couponsFlexpass}</a>
            <ul className="showtix-navigation__sublist">
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">{strings.createCoupon}</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">{strings.createFlexpass}</a>
              </li>
              <li className={!isManageCoupons ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/coupons">{strings.manage}</Link>
              </li>
            </ul>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.users}</a>
            <ul className="showtix-navigation__sublist">
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">{strings.createUser}</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">{strings.manage}</a>
              </li>
            </ul>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.reports}</a>
            <ul className="showtix-navigation__sublist">
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Event account</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Account history</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Event seating</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Account history</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Ticket pricing</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Patron list</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Address labels</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Venue seat labels</a>
              </li>
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="#">Website promo card</a>
              </li>
            </ul>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.clientPreferences}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.purchaseEquipment}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.faq}</a>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">{strings.logout}</a>
          </li>
        </ul>
      </div> 
    );
  }
}

export default AdminNavigation;
