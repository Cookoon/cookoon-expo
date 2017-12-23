import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class ButtonDateTimePicker extends Component {
  state = {
    dateTime: null,
    formattedDateTime: '',
    isDateTimePickerVisible: false
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = dateTime => {
    const formattedDateTime = moment(dateTime)
      .locale('fr')
      .format('Do MMMM à HH[h]mm');
    this.setState({ dateTime, formattedDateTime });
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.formattedDateTime || 'Toutes les dates'}
          onPress={this.showDateTimePicker}
        />
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  }
});
