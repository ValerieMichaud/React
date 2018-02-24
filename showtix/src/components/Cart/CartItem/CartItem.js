import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';
import moment from 'moment';

import './CartItem.css';

let strings = new LocalizedStrings({en,fr});

class CartItem extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	
	    };
	}

	editTicket = (key, parentKey) => {
		this.props.onEditTicket(key, parentKey);
	}

	render() {
		const _this = this;
		//strings.setLanguage('fr');
		const dateString = moment(this.props.item.date).format('LLLL');
	  	return (
	  		<div className="showtix-cart-item">
	  			<div className="showtix-cart-item__header d-flex">
	  				<div className="showtix-cart-item__poster">
	  					<img src="https://www.showtix4u.com/graphics_globals/graphics_posters.php?id=27679" />
	  				</div>
	  				<div className="showtix-cart-item__infos">
	  					<h3 className="showtix-cart-item__title">{this.props.item.title}</h3>
	  					<p className="showtix-cart-item__date">{dateString}</p>
	  				</div>
	  			</div>
	  			<div className="showtix-cart-item__body">
	  				{this.props.item.tickets.map((ticket, key) => 
			        	<div key={key}>
			        		{ticket.type}
			        		{ticket.price}
			        		{ticket.quantity}
			        		<button onClick={() => _this.editTicket(key, _this.props.parentKey)}>Edit</button>
			        	</div>
			        )}
	  			</div>
	  		</div>
	  	);
	}
}

export default CartItem;
