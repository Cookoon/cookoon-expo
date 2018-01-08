import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';

export default class Auth extends Component {
  static navigationOptions = {
    title: 'Accès membre'
  };

  state = { email: '', password: '', jwt: 'vide' };

  onLoginFormSubmit = () => {
    axios
      .post('http://localhost:3000/users/sign_in.json', {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(response => {
        this.setState({ jwt: response.headers.authorization });
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main' })]
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(error => {
        this.setState({ jwt: error.response.data.message });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.loginFormInput}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="nestor@cookoon.fr"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <Text>Mot de passe</Text>
            <TextInput
              style={styles.loginFormInput}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button title="Se connecter" onPress={this.onLoginFormSubmit} />
          </View>

          <Text>{this.state.jwt}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  loginFormInput: {
    height: 30,
    borderColor: 'gray',
    borderBottomWidth: 1
  }
});
