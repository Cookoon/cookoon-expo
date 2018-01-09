import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import colors from 'constants/colors';
import { signOut } from '../Auth/duck';

class Care extends Component {
  static navigationOptions = {
    tabBarLabel: 'Aide',
    title: 'Vos contacts utiles'
  };

  handleHelpPress = () => {
    WebBrowser.openBrowserAsync('https://aide.cookoon.fr');
  };

  handleSignOut = () => {
    this.props.signOut();

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Auth' })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Une question ?</Text>
            <Text>
              Vous trouverez toutes vos réponses sur notre Centre d'Aide
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={this.handleHelpPress}
              style={styles.helpLink}
            >
              <Text style={styles.helpLinkText}>Centre d'aide</Text>
            </TouchableOpacity>
          </View>

          <Button title="Se déconnecter" onPress={this.handleSignOut} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});

export default connect(null, { signOut })(Care);
