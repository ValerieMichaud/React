import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const LoggedOutView = props => {
  //if (!props.currentUser) {
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
  //}
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    const pathname = props.activeRoute;

    const isBoxOffice = pathname === '/events';
    const isSearch = pathname === '/search';
    const isAddCustomer = pathname === '/customer';
    const isBulkEmail = pathname === '/bulk-email';
    const isAddEvent = pathname === '/event';
    const isManageTags = pathname === '/tags';
    const isManageCoupons = pathname === '/coupons';

    return (
      <div>
        <div className="showtix-badge showtix-background__grey-3">
          Management
        </div>
        <ul className="showtix-navigation__list">
          <li className={!isBoxOffice ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
            <Link className="showtix-navigation__link" to="/events">Box Office</Link>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Customers</a>
            <ul className="showtix-navigation__sublist">
              <li className={!isSearch ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/search">Search</Link>
              </li>
              <li className={!isAddCustomer ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/customer">Add</Link>
              </li>
              <li className={!isBulkEmail ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/bulk-email">Bulk Email</Link>
              </li>
            </ul>
          </li>
          <li className={!isBoxOffice ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
            <Link className="showtix-navigation__link" to="/events">Events</Link>
            <ul className="showtix-navigation__sublist">
              <li className={!isAddEvent ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/event">Add new event</Link>
              </li>
            </ul>
          </li>
          <li className="showtix-navigation__item">
            <a className="showtix-navigation__link" href="#">Tags</a>
            <ul className="showtix-navigation__sublist">
              <li className={!isManageTags ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/tags">Manage</Link>
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
              <li className={!isManageCoupons ? 'showtix-navigation__item' : 'showtix-navigation__item is-active'}>
                <Link className="showtix-navigation__link" to="/coupons">Manage</Link>
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
        </ul>
      </div>  
    );
  }
  return null;
};

@inject('userStore', 'commonStore', 'authStore')
@observer
class Header extends React.Component {
  handleClickLogout = () =>
    this.props.authStore.logout();
      //.then(() => this.props.history.replace('/'));

  render() {
    const isLoggedIn = this.props.userStore.currentUser;
    if(!isLoggedIn){
      return (
        <div>
          <nav className={!this.props.navigationOpen ? 'showtix-navigation' : 'showtix-navigation is-active'} >
            <LoggedOutView currentUser={this.props.userStore.currentUser} activeRoute={this.props.activeRoute} />
          </nav>
        </div>
      );
    }
    return (
      <div>
        <nav className={!this.props.navigationOpen ? 'showtix-navigation' : 'showtix-navigation is-active'} >
          <LoggedOutView currentUser={this.props.userStore.currentUser} activeRoute={this.props.activeRoute} />
          <div className="showtix-navigation__client">
            <LoggedInView currentUser={this.props.userStore.currentUser} activeRoute={this.props.activeRoute} />
            <ul className="showtix-navigation__list">
              <li className="showtix-navigation__item">
                <a className="showtix-navigation__link" href="javascript:return false;" onClick={this.handleClickLogout}>Log out</a>
              </li>
            </ul>  
          </div>  
        </nav>
      </div>
    );
  }
}

export default Header;