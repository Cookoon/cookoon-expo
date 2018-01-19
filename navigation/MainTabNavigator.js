import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import colors from 'constants/colors';

import Cookoons from '../screens/Cookoons';
import Reservations from '../screens/Reservations';
import HostCookoons from '../screens/HostCookoons';
import Requests from '../screens/Requests';
import Care from '../screens/Care';

export default TabNavigator(
  {
    Cookoons: {
      screen: Cookoons
    },
    Reservations: {
      screen: Reservations
    },
    HostCookoons: {
      screen: HostCookoons
    },
    Requests: {
      screen: Requests
    },
    Care: {
      screen: Care
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Cookoons':
            iconName =
              Platform.OS === 'ios'
                ? `ios-search${focused ? '' : '-outline'}`
                : 'md-search';
            break;
          case 'Reservations':
            iconName =
              Platform.OS === 'ios'
                ? `ios-link${focused ? '' : '-outline'}`
                : 'md-link';
            break;
          case 'HostCookoons':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Requests':
            iconName =
              Platform.OS === 'ios'
                ? `ios-key${focused ? '' : '-outline'}`
                : 'md-key';
            break;
          case 'Care':
            iconName =
              Platform.OS === 'ios'
                ? `ios-person${focused ? '' : '-outline'}`
                : 'md-person';
            break;
          default:
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? colors.tabIconSelected : colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
