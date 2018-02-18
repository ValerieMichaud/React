import React from 'react';

import './Event.css';

const EventAPI = {
  events: [
    { id: 1, name: "Ben Blocker", position: "G" },
    { id: 2, name: "Dave Defender", position: "D" },
    { id: 3, name: "Sam Sweeper", position: "D" },
    { id: 4, name: "Matt Midfielder", position: "M" },
    { id: 5, name: "William Winger", position: "M" },
    { id: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.events},
  get: function(id) {
    const isEvent = p => p.id === id
    return this.events.find(isEvent)
  }
}


class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let event = {
      id: 0,
      name: '',
      position: ''
    };
    if(typeof (this.props.id) !== "undefined"){
      event = EventAPI.get(parseInt(this.props.id));
      if (!event) {
        return <div>Sorry, but the event was not found</div>
      }
    } 
    
    return (
      <div>
        <div className="showtix-section container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Event details</h1>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="showtix-form__group">
                      <label className="showtix-label">Event Type*</label>
                      <div className="showtix-form__select">
                        <select className="showtix-input">
                          <option>Event</option>
                          <option>Donation</option>
                        </select>
                      </div> 
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="showtix-form__group">
                      <label className="showtix-label">Event name*</label>
                      <div className="showtix-form__input">
                        <input className="showtix-input js-phone-mask" type="text" value={event.name} />
                      </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
    )
  }
}

export default Event;
