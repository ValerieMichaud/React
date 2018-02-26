import React, { Component } from 'react';

import './TextareaCount.css';

class TextareaCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      value: '',
      name: '',
      object: ''
    }
  }

  handleChange = (target) => {
    this.props.onChange(target);
  }

  handleKeyUp(e) {
    if(e.target.value.length > this.props.maxLength){
      e.target.value = e.target.value.slice(0, this.props.maxLength);
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.setState({
        length: e.target.value.length
      });
    }
  }

  render() {
    console.log(this.props.object)
    return (
      <div>
        <div class="showtix-form__input">
          <textarea 
            class="showtix-input" 
            rows="5"
            object={this.props.object}
            name={this.props.name}
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
          >
            {this.props.value}
          </textarea>
        </div>
        <div class="showtix-note text-right">
          {this.state.length}/{this.props.maxLength}
        </div>
      </div>
    );
  }
}

export default TextareaCount;
