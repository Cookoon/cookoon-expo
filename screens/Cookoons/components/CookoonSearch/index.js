import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import ButtonAddress from './components/ButtonAddress';
import ButtonPeople from './components/ButtonPeople';
import ButtonDateTimePicker from './components/ButtonDateTimePicker';
import ButtonDuration from './components/ButtonDuration';

export default class CookoonSearch extends Component {
  render() {
    return (
      <View style={{ margin: 5 }}>
        <ButtonAddress />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: 'row' }}
        >
          <ButtonPeople />

          <ButtonDateTimePicker />

          <ButtonDuration />
        </ScrollView>
      </View>
    );
  }
}
