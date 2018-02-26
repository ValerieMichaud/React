import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';
import Register from '../../components/Register/Register';

import './Register.css';

let _this;
let strings = new LocalizedStrings({en,fr});

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default RegisterPage;
