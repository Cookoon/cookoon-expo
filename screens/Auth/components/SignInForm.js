import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import axios from 'axios';

import env from 'constants/env';
import { setJwt } from 'redux/modules/auth';

class SignInForm extends Component {
  handleSubmit = async values => {
    try {
      const { headers } = await axios.post(
        `${env.BASE_URL}/users/sign_in.json`,
        {
          user: {
            email: values.email,
            password: values.password
          }
        }
      );
      const jwt = headers.authorization.replace('Bearer ', '');
      this.props.setJwt(jwt);

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Main' })]
      });
      this.props.navigation.dispatch(resetAction);
    } catch (error) {
      this.props.change('password', '');
      throw new SubmissionError({
        _error: error.response.data.error
      });
    }
  };

  renderField = ({
    input: { onChange, ...restInput },
    label,
    meta: { touched, error },
    ...restField
  }) => (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        {...restField}
      />
      {touched && error && <Text>{error}</Text>}
    </View>
  );

  render() {
    const { error, handleSubmit, submitting } = this.props;

    return (
      <View style={styles.container}>
        {error && <Text style={styles.error}>{error}</Text>}

        <Field
          name="email"
          component={this.renderField}
          label="Email"
          placeholder="nestor@cookoon.fr"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
        />
        <Field
          name="password"
          component={this.renderField}
          label="Mot de passe"
          secureTextEntry
        />
        <View>
          <Button
            title={submitting ? 'Connexion...' : 'Se connecter'}
            disabled={submitting}
            onPress={handleSubmit(this.handleSubmit)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  error: {
    color: 'red'
  }
});

export default reduxForm({
  form: 'signIn'
})(connect(null, { setJwt })(SignInForm));
