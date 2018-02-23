import React, { Component } from 'react';
import './Help.css';

class Help extends Component {
	render() {
	  	return (
			<div>
		  		<div className="showtix-box">
		  			<div class="showtix-padder">
						<h3 className="showtix-box__title">Help</h3>
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
