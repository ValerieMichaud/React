import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Event from './Event';

@inject('editorStore')
@withRouter
@observer
export default class EditEvent extends React.Component {

  render() {
    return (
      <div>
        <Event title="Edit an event" id={this.props.match.params.id} />
      </div>
    );
  }
}
