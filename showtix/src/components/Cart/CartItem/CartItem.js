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

	render() {
		//strings.setLanguage('fr');
	  	return (
			<div>
		  		<div className="showtix-cart__item">
		  			ITEM	
		  		</div>
			</div>
	  	);
	}
}

export default CartItem;
