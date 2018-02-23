import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Help from './components/Help/Help';

import './App.css';


const Home = () => (
  	<div>
  		<div className="showtix-section showtix-background__primary-1">
	  		<div className="container">
			    <div className="row">
			    	<div className="col-8">
			    		<h1>Home</h1>
			    	</div>
			    	<div className="col-4">
			    		<Help />
			    	</div>
			    </div>
			</div>
		</div>    
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
	          	<div className="showtix-page-body">
		          	<Switch>
		            	<Route exact path="/event" component={CreateEvent} />
		            	<Route exact path="/event/:id" component={EditEvent} />
		            	<Route path="/" component={Home} />
		          	</Switch>
		        </div>  	
	        </div>
    	);
  	}
}

export default App;
