import React, { Component } from 'react';
import { View } from 'react-native';

import ButtonAddress from './components/ButtonAddress';
import ButtonPeople from './components/ButtonPeople';
import ButtonDateTimePicker from './components/ButtonDateTimePicker';
import ButtonDuration from './components/ButtonDuration';

export default class CookoonSearchBar extends Component {
  render() {
    return (
      <View>
        <ButtonAddress />

        <ButtonPeople />

        <ButtonDateTimePicker />

        <ButtonDuration />
      </View>
    );
  }
}
