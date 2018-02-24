import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';

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
	  	return (
			<div>
		  		<div className="showtix-cart__item">
		  		<p>{this.props.parentKey}</p> 
		  			<p>{this.props.item.id}</p> 
			        <p>{this.props.item.title}</p>
			        <p>{this.props.item.date}</p>
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
