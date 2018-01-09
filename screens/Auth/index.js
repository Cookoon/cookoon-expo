import React, { Component } from 'react';

import SignInForm from './components/SignInForm';

export default class Auth extends Component {
  static navigationOptions = {
    title: 'Accès membre'
  };

  render() {
    return <SignInForm {...this.props} />;
  }
}
