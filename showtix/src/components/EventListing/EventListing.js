import React, { Component } from 'react';
import Cart from '../Cart/Cart';

import './EventListing.css';

class EventListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 1,
        title: 'Beauty and the Beast',
        date: new Date('January 24, 2018 19:30:00').toString(),
        tickets: [{
          id: 1,
          type: 'General Admission',
          price: 12,
          quantity: 1
        },
        {
          id: 2,
          type: 'General Admission',
          price: 12,
          quantity: 1
        },
        {
          id: 3,
          type: 'Children',
          price: 10,
          quantity: 1
        },
        {
          id: 4,
          type: 'Children',
          price: 10,
          quantity: 1
        }]
      },
      {
        id: 2,
        title: 'Beautasdasdasdsdy and the Beast',
        date: new Date('February 19, 2018 14:30:00').toString(),
        tickets: [{
          id: 1,
          type: 'General Admission',
          price: 12,
          quantity: 1
        },
        {
          id: 2,
          type: 'General Admission',
          price: 12,
          quantity: 1
        },
        {
          id: 3,
          type: 'Children',
          price: 10,
          quantity: 1
        },
        {
          id: 4,
          type: 'Children',
          price: 10,
          quantity: 1
        }]
      }],
      cartOpen: false
    };
  }

  addEvent(event) {
    let newEvent = {
      id: event.target.attributes.getNamedItem('id').value,
      title: event.target.attributes.getNamedItem('title').value,
      date: event.target.attributes.getNamedItem('date').value.toString(),
      tickets: []
    }
    let items = this.state.items;
    items.push(newEvent);
    this.setState({
      items: items
    })
  }

  addTicket(ticket) {
    let newTicket = {
      quantity: ticket.target.attributes.getNamedItem('quantity').value,
      type: ticket.target.attributes.getNamedItem('type').value,
      price: ticket.target.attributes.getNamedItem('price').value.toString(),
    }
    let eventId = ticket.target.attributes.getNamedItem('eventid').value;
    let items = this.state.items;
    var index = items.findIndex(x => x.id == eventId);
    console.log(index);

    let tickets = items[index].tickets;
    tickets.push(newTicket);

    items[index].tickets = tickets;

    this.setState({
      items: items
    });
  }

  editTicket = (key, parentKey) => {
    console.log('ticket key :'+key);
    console.log('event key :'+parentKey);
  }

  componentWillMount() {
    let cartOpen = this.state.cartOpen;
    cartOpen = this.props.cartOpen;
    console.log(this.props)
    this.setState({
      cartOpen: cartOpen
    });

  }

  render() {
    return (
      <div>
        <div className="showtix-section showtix-background__primary-1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 text-center">
                <h1>Client's name</h1>

                <button id="67" title="Test" date="March 18, 2018 20:30:00" onClick={this.addEvent.bind(this)}>Add event</button>
                <button id="1" type="general" price="12.00" quantity="1" eventid="67" onClick={this.addTicket.bind(this)}>Add ticket</button>
              </div>
              <div className="col-12 col-md-4">
                <Cart items={this.state.items} onEditTicket={this.editTicket} cartOpen={this.props.cartOpen} />
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default EventListing;
