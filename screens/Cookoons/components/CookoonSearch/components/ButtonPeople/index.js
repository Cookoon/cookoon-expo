import React, { Component } from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';

import colors from 'constants/colors';

import { setPeople } from 'redux/modules/cookoons/search';

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
          outline={!this.props.people}
          borderRadius={7}
          backgroundColor={this.props.people ? colors.cookoonBlue : 'white'}
          color={this.props.people ? 'white' : colors.cookoonBlue}
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
  return { people: state.cookoons.search.people };
}

export default connect(mapStateToProps, { setPeople })(ButtonPeople);
