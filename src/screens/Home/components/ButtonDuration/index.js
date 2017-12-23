import React, { Component } from 'react';
import { Button, Slider, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import Colors from '../../../../constants/Colors';

export default class ButtonDuration extends Component {
  state = { duration: 2, isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`Pendant ${this.state.duration} heures`}
          onPress={this.showModal}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor={Colors.cookoonBlue}
          onBackButtonPress={this.hideModal}
          onBackdropPress={this.hideModal}
          style={styles.modal}
        >
          <Text style={styles.modalText}>
            Pendant {this.state.duration} heures
          </Text>
          <Slider
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={this.state.duration}
            onValueChange={duration => this.setState({ duration })}
            onSlidingComplete={this.hideModal}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 5
  },
  modalText: {
    textAlign: 'center'
  }
});
