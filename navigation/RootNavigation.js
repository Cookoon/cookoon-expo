import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Auth from '../screens/Auth';
import MainTabNavigator from './MainTabNavigator';

const RootStackNavigator = StackNavigator({
  Auth: {
    screen: Auth
  },
  Main: {
    screen: MainTabNavigator
  }
});

export default class RootNavigator extends Component {
  render() {
    return <RootStackNavigator />;
  }
}
