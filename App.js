import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Constants, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Colors from './src/constants/Colors';
import Banner from './src/assets/images/banner.jpg';

import RootNavigation from './src/navigation/RootNavigation';

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => {
    Promise.all([
      Asset.loadAsync([Banner]),
      Font.loadAsync({ ...Ionicons.font })
    ]);
  };

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBarUnderlay: {
    height: Constants.statusBarHeight,
    backgroundColor: Colors.cookoonBlue
  }
});
