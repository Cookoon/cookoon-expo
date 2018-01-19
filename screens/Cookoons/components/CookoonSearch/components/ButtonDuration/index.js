import React, { Component } from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';

import colors from 'constants/colors';

import { setDuration } from 'redux/modules/cookoons/search';

class ButtonDuration extends Component {
  state = { isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`Pendant ${this.props.duration} heures`}
          onPress={this.showModal}
          outline={!this.props.duration}
          borderRadius={7}
          backgroundColor={this.props.duration ? colors.cookoonBlue : 'white'}
          color={this.props.duration ? 'white' : colors.cookoonBlue}
          containerViewStyle={{ marginLeft: 5, marginRight: 5 }}
          buttonStyle={{ padding: 5 }}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor={colors.cookoonBlue}
          onBackButtonPress={this.hideModal}
          onBackdropPress={this.hideModal}
          style={styles.modal}
        >
          <Text style={styles.modalText}>
            Pendant {this.props.duration} heures
          </Text>
          <Slider
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={this.props.duration}
            onValueChange={duration => this.props.setDuration(duration)}
            onSlidingComplete={this.hideModal}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  modal: {
    backgroundColor: 'white',
    borderRadius: 5
  },
  modalText: {
    textAlign: 'center'
  }
});

function mapStateToProps(state) {
  return { duration: state.cookoons.search.duration };
}

export default connect(mapStateToProps, { setDuration })(ButtonDuration);
