import React, { Component } from 'react';
import { Button, Slider, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import Colors from '../../../../constants/Colors';

export default class ButtonPeople extends Component {
  state = { people: 4, isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`Pour ${this.state.people} personnes`}
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
            Pour {this.state.people} personnes
          </Text>
          <Slider
            minimumValue={2}
            maximumValue={8}
            step={1}
            value={this.state.people}
            onValueChange={people => this.setState({ people })}
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
