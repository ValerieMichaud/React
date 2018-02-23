import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';

import './Help.css';

let strings = new LocalizedStrings({en,fr});

class Help extends Component {
	render() {
		//strings.setLanguage('fr');
	  	return (
			<div>
		  		<div className="showtix-box">
		  			<div className="showtix-padder">
						<h3 className="showtix-box__title">{strings.help}</h3>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus tellus ac orci lacinia accumsan. Etiam vel nulla eu nisi interdum viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi elementum elit vitae leo fringilla, in commodo enim suscipit. Proin id lobortis elit. Aliquam fermentum egestas blandit. Integer vestibulum vulputate arcu, ac eleifend mauris ullamcorper id. Ut vitae tortor neque.</p>
						<ul>
							<li><a href="">Test</a> this was a link</li>
							<li>Pellentesque habitant morbi tristique senectus</li>
							<li>Pellentesque habitant morbi tristique senectus</li>
							<li>Proin id lobortis elit. Aliquam fermentum egestas blandit. Integer vestibulum vulputate arcu, ac eleifend</li>
						</ul>
					</div>	
		  		</div>
			</div>
	  	);
	}
}

export default Help;
