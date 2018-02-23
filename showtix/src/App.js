import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import './App.css';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const CreateEvent = () => (
  <div>
    <h2>Create Event</h2>
  </div>
);

const EditEvent = ({ match }) => (
  <div>
    <h2>Edit event: {match.params.id}</h2>
  </div>
);

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	navigationOpen: false,
	    };
	}

	toggleNav = (dataFromChild) => {
    	this.setState({
      		navigationOpen: !this.state.navigationOpen,
    	});
  	}

  	render() {
    	return (
      		<div>
	          	<Header callbackFromParent={this.toggleNav} navigationOpen={this.state.navigationOpen} />
	          	<Navigation navigationOpen={this.state.navigationOpen} />
	          	<div className="container">
		          	<div className="showtix-page-body">
			          	<Switch>
			            	<Route exact path="/event" component={CreateEvent} />
			            	<Route exact path="/event/:id" component={EditEvent} />
			            	<Route path="/" component={Home} />
			          	</Switch>
			        </div>
			    </div>      	
	        </div>
    	);
  	}
}

export default App;
