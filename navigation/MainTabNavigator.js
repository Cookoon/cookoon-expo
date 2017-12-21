import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import SearchScreen from '../screens/SearchScreen';
import ReservationsScreen from '../screens/ReservationsScreen';
import CookoonsScreen from '../screens/CookoonsScreen';
import RequestsScreen from '../screens/RequestsScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    Reservations: {
      screen: ReservationsScreen
    },
    Cookoons: {
      screen: CookoonsScreen
    },
    Requests: {
      screen: RequestsScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Search':
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
          case 'Cookoons':
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
          case 'Settings':
            iconName =
              Platform.OS === 'ios'
                ? `ios-options${focused ? '' : '-outline'}`
                : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
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
