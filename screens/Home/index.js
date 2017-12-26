import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

import Banner from '../../assets/images/banner.jpg';

import ButtonAddress from './components/ButtonAddress';
import ButtonPeople from './components/ButtonPeople';
import ButtonDateTimePicker from './components/ButtonDateTimePicker';
import ButtonDuration from './components/ButtonDuration';

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Recherche',
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Banner} style={styles.welcomeImage} />

        <ButtonAddress />

        <ButtonPeople />

        <ButtonDateTimePicker />

        <ButtonDuration />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  welcomeImage: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover'
  }
});
