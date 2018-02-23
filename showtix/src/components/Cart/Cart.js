import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';
import moment from 'moment';
import Countdown from 'react-countdown-moment'
import CartItem from './CartItem/CartItem';


import './Cart.css';

let strings = new LocalizedStrings({en,fr});

const endDate = moment().add(3, 'minutes');

class Cart extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	timer: 180,
	      	items: [],
	      	tickets: 0,
	      	subtotal: 0,
	      	fees: 0,
	      	promo: false,
	      	promoValue: 0,
	      	total: 0
	    };
	}

	render() {
		//strings.setLanguage('fr');
	  	return (
			<div>
		  		<div className="showtix-cart">
		  			<div className="showtix-cart__header">
		  				<div className="showtix-timer">
		  					<div className="showtix-padder">
		  						Please complete your order in 
		  						<span className="showtix-timer-time">
		  							<Countdown endDate={endDate} />
		  						</span>
		  					</div>
		  				</div>		
		  			</div>
		  			<div className="showtix-cart__body">	
		  				<div className="showtix-padder">
							<h3 className="showtix-cart__title">{strings.cart}</h3>
							
							<CartItem />
						</div>		
					</div>	
		  		</div>
			</div>
	  	);
	}
}

export default Cart;
