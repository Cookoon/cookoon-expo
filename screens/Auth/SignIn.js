import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import colors from 'constants/colors';
import SignInForm from './components/SignInForm';

export default class Auth extends Component {
  static navigationOptions = {
    title: 'Accès membre'
  };

  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <SignInForm {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream
  }
});
