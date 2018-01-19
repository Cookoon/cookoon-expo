import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import SignIn from 'screens/Auth/SignIn';
import MainTabNavigator from './MainTabNavigator';
import CookoonsShow from '../screens/Cookoons/show';

const RootStackNavigator = StackNavigator({
  Auth: {
    screen: SignIn
  },
  Main: {
    screen: MainTabNavigator
  },
  CookoonsShow: {
    screen: CookoonsShow,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  }
});

export default class RootNavigator extends Component {
  render() {
    return <RootStackNavigator />;
  }
}
