import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Colors from '../../../../constants/Colors';

export default class ButtonAddress extends Component {
  state = {
    address: '',
    isModalVisible: false
  };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  handleAddressPicked = data => {
    this.setState({ address: data.description });
    this.hideModal();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.address || 'Toutes les adresses'}
          onPress={this.showModal}
        />

        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor={Colors.cookoonBlue}
          onBackButtonPress={this.hideModal}
          onBackdropPress={this.hideModal}
          style={styles.modal}
        >
          <GooglePlacesAutocomplete
            placeholder="Essayez « Paris »"
            minLength={2}
            autoFocus
            returnKeyType="search"
            listViewDisplayed="auto"
            renderDescription={row => row.description}
            onPress={this.handleAddressPicked}
            getDefaultValue={() => ''}
            query={{
              key: 'AIzaSyB0L5dYH7Usl-qcLmg84yWvlO2YVML3jd4',
              origin: 'app.cookoon.fr',
              language: 'fr',
              types: 'geocode',
              components: 'country:fr'
            }}
            styles={{
              textInputContainer: {
                width: '100%'
              },
              description: {
                fontWeight: 'bold'
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              }
            }}
            currentLocation
            currentLocationLabel="Ma position"
            nearbyPlacesAPI="GoogleReverseGeocoding"
            debounce={200}
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
  }
});
