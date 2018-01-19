import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

import colors from 'constants/colors';

import { fetchCookoons } from 'redux/modules/cookoons';
import { setDateTime } from 'redux/modules/cookoons/search';

class ButtonDateTimePicker extends Component {
  state = { isDateTimePickerVisible: false };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = dateTime => {
    this.props.setDateTime(dateTime);
    this.props.fetchCookoons();
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.props.formattedDateTime || 'Toutes les dates'}
          onPress={this.showDateTimePicker}
          outline={!this.props.formattedDateTime}
          borderRadius={7}
          backgroundColor={
            this.props.formattedDateTime ? colors.cookoonBlue : 'white'
          }
          color={this.props.formattedDateTime ? 'white' : colors.cookoonBlue}
          containerViewStyle={{ marginLeft: 5, marginRight: 5 }}
          buttonStyle={{ padding: 5 }}
        />
        <DateTimePicker
          mode="datetime"
          minuteInterval={30}
          isVisible={this.state.isDateTimePickerVisible}
          titleIOS="Choisissez une date"
          confirmTextIOS="Confirmer"
          cancelTextIOS="Annuler"
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

function mapStateToProps(state) {
  return { formattedDateTime: state.cookoons.search.formattedDateTime };
}

export default connect(mapStateToProps, { setDateTime, fetchCookoons })(
  ButtonDateTimePicker
);
