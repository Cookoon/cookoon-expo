import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { setDateTime } from 'redux/modules/cookoons/search';

class ButtonDateTimePicker extends Component {
  state = { isDateTimePickerVisible: false };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = dateTime => {
    this.props.setDateTime(dateTime);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.props.formattedDateTime || 'Toutes les dates'}
          onPress={this.showDateTimePicker}
        />
        <DateTimePicker
          mode="datetime"
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
  container: {
    margin: 5
  }
});

function mapStateToProps(state) {
  return { formattedDateTime: state.cookoons.search.formattedDateTime };
}

export default connect(mapStateToProps, { setDateTime })(ButtonDateTimePicker);
