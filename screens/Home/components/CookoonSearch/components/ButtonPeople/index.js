import React, { Component } from 'react';
import { Button, Slider, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import Colors from 'constants/Colors';

import { setPeople } from '../../duck';

class ButtonPeople extends Component {
  state = { isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`Pour ${this.props.people} personnes`}
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
            Pour {this.props.people} personnes
          </Text>
          <Slider
            minimumValue={2}
            maximumValue={8}
            step={1}
            value={this.props.people}
            onValueChange={people => this.props.setPeople(people)}
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

function mapStateToProps(state) {
  return { people: state.cookoonSearch.people };
}

export default connect(mapStateToProps, { setPeople })(ButtonPeople);
