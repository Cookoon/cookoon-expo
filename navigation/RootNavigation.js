import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Auth from '../screens/Auth';
import MainTabNavigator from './MainTabNavigator';
import CookoonsShow from '../screens/Home/screens/CookoonsShow';

const RootStackNavigator = StackNavigator({
  Auth: {
    screen: Auth
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
