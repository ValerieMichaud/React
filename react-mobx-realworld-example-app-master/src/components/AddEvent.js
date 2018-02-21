import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Event from './Event';

@inject('editorStore')
@withRouter
@observer
export default class AddEvent extends React.Component {

  render() {

    return (
      <div>
      	<Event title="Create an event" />
      </div>
    );
  }
}
