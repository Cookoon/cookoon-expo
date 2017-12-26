import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

import Banner from '../../assets/images/banner.jpg';

import CookoonSearch from './components/CookoonSearch';

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Recherche',
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Banner} style={styles.welcomeImage} />
        <CookoonSearch />
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
