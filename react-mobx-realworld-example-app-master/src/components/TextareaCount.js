import React from 'react';

export default class TextareaCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0
    }
  }

  handleChange(event) {
    //console.log(this.props)
    console.log(event)
    //if(event.target.value.length > this.props.maxLength){
      //this.setState({
      //  length: event.target.value.length
      //});
    //}
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div class="showtix-form__input">
          <textarea class="showtix-input" rows="5" onChange={this.handleChange}></textarea>
        </div>
        <div class="showtix-note text-right">
          {this.state.length} character(s) 
        </div>
      </div>
    );
  }
}
