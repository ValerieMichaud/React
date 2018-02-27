import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import EventListing from './components/EventListing/EventListing';
import Event from './components/Event/Event';
import RegisterPage from './pages/Register/Register';

import './App.css';


const Home = () => (
  	<div>
  		<div className="showtix-section showtix-background__primary-1">
	  		<div className="container">
			    <div className="row">
			    	<div className="col-12 col-md-8">
			    		<h1>Home</h1>
			    	</div>
			    	<div className="col-12 col-md-4">
			    		<Cart />
			    		<Help />
			    	</div>
			    </div>
			</div>
		</div> 
		<div className="showtix-section showtix-background__primary-2">
	  		<div className="container">
			    <div className="row">
			    	<div className="col-12 text-center">
			    		<h1>Home</h1>
			    	</div>
			    </div>
			</div>
		</div>    
  	</div>
);

const CreateEvent = () => (
  <div>
    <h2>Create Event</h2>
    <Event />
  </div>
);

const EditEvent = ({ match }) => (
  <div>
    <h2>Edit event</h2>
    <Event id={match.params.id} />
  </div>
);

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	navigationOpen: false,
	      	cartOpen: false
	    };
	}

	toggleNav = (dataFromChild) => {
    	this.setState({
      		navigationOpen: !this.state.navigationOpen,
    	});
  	}

  	toggleCart = (dataFromChild) => {
    	this.setState({
      		cartOpen: !this.state.cartOpen,
    	});
  	}

  	render() {
    	return (
      		<div>
	          	<Header toggleNav={this.toggleNav} toggleCart={this.toggleCart} navigationOpen={this.state.navigationOpen} />
	          	<Navigation navigationOpen={this.state.navigationOpen} />
	          	<div className="showtix-page-body">
		          	<Switch>
		            	<Route exact path="/event" component={CreateEvent} />
		            	<Route exact path="/event/:id" component={EditEvent} />
		            	<Route path="/register" component={RegisterPage} />
		            	<Route path="/" render={() => <EventListing cartOpen={this.state.cartOpen}/>} />
		          	</Switch>
		        </div>  	
	        </div>
    	);
  	}
}

export default App;
