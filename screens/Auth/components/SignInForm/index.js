import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import axios from 'axios';

import { setJwt } from '../../duck';

class SignInForm extends Component {
  handleSubmit = async values => {
    try {
      const { headers } = await axios.post(
        'http://localhost:3000/users/sign_in.json',
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
        _error: error.response.data.message
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
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

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
        />
        <Field
          name="password"
          component={this.renderField}
          label="Mot de passe"
          secureTextEntry
        />
        <View>
          <Button
            title={submitting ? '...' : 'Se connecter'}
            disabled={submitting}
            onPress={handleSubmit(this.handleSubmit)}
          />
          <Button
            title="Effacer"
            disabled={pristine || submitting}
            onPress={reset}
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
