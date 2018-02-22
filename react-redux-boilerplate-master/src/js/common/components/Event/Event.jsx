import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

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

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      event: {},
      show: false,
    };
  }

  componentWillMount() {
    let event = this.state.event;
    if(typeof (this.props.id) !== "undefined"){
      event = EventAPI.get(parseInt(this.props.id));
      if (!event) {
        return <div>Sorry, but the event was not found</div>
      }
      this.setState({
        event: event,
      });
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax { [e.target.name] = e.target.value }
    var eventUpdate = this.state.event;
    eventUpdate[e.target.name] = e.target.value;
    this.setState({event: eventUpdate})
  }

  render() {
    
    
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <a className="showtix-button" onClick={this.handleClose}>Close</a>
          </Modal.Footer>
        </Modal>

        <div className="showtix-section container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Event details</h1>
              <a href="#" onClick={this.handleShow}>
                Launch demo modal
              </a>
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
                        <input className="showtix-input" type="text" name="name" value={this.state.event.name} onChange={this.handleChange.bind(this)} value={this.state.event.name} />
                      </div> 
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="showtix-form__group">
                      <label className="showtix-label">Id</label>
                      <div className="showtix-form__input">
                        <input className="showtix-input" type="text" name="id" value={this.state.event.id} onChange={this.handleChange.bind(this)} value={this.state.event.id} />
                      </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="showtix-form__group">
                      <label className="showtix-label">Position*</label>
                      <div className="showtix-form__input">
                        <input className="showtix-input" type="text" name="position" value={this.state.event.position} onChange={this.handleChange.bind(this)} value={this.state.event.position} />
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
