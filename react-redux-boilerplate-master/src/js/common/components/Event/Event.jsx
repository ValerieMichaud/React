import React from 'react';

import './Event.css';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(typeof (this.props.id) === "undefined"){
      return (
        <div>
          Let's create a new event
        </div> 
      )
    }
    return (
      <div>
        Let's edit an existing event with the ID: 
        {this.props.id}
      </div> 
    )
  }
}

export default Event;
