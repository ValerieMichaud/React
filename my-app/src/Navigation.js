import React from 'react';
import './stylesheets/components/_navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="showtix-navigation js-navigation">
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

            <div className="showtix-navigation__client">
              <div className="showtix-badge showtix-background__grey-3">
                Management
              </div>
              <ul className="showtix-navigation__list">
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Box office</a>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Customers</a>
                  <ul className="showtix-navigation__sublist">
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Search/Edit</a>
                    </li>
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Add</a>
                    </li>
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Bulk email</a>
                    </li>
                  </ul>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Events</a>
                  <ul className="showtix-navigation__sublist">
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Add new event</a>
                    </li>
                  </ul>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Tags</a>
                  <ul className="showtix-navigation__sublist">
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Manage</a>
                    </li>
                  </ul>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Coupons/Flexpass</a>
                  <ul className="showtix-navigation__sublist">
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Create coupon</a>
                    </li>
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Create flexpass</a>
                    </li>
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Manage</a>
                    </li>
                  </ul>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Users</a>
                  <ul className="showtix-navigation__sublist">
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Create a new user</a>
                    </li>
                    <li className="showtix-navigation__item">
                      <a className="showtix-navigation__link" href="#">Manage</a>
                    </li>
                  </ul>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Reports</a>
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
                  <a className="showtix-navigation__link" href="#">Preferences</a>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Purchase equipment</a>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Help</a>
                </li>
                <li className="showtix-navigation__item">
                  <a className="showtix-navigation__link" href="#">Log out</a>
                </li>
              </ul>
          </div>    
        </nav>
      </div>
    );
  }
}

export default Navigation;