import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import colors from 'constants/colors';

import { fetchCookoons } from 'redux/modules/cookoons';
import { setAddress } from 'redux/modules/cookoons/search';

class ButtonAddress extends Component {
  state = { isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  handleAddressPicked = data => {
    this.props.setAddress(data.description);
    this.props.fetchCookoons();
    this.hideModal();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={
            this.props.address
              ? {}
              : { name: 'search', color: colors.cookoonBlue }
          }
          title={this.props.address || 'Toutes les adresses'}
          onPress={this.showModal}
          outline={!this.props.address}
          borderRadius={7}
          backgroundColor={this.props.address ? colors.cookoonBlue : 'white'}
          color={this.props.address ? 'white' : colors.cookoonBlue}
          containerViewStyle={{
            marginTop: 5,
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5
          }}
          buttonStyle={{ padding: 5 }}
        />

        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor={colors.cookoonBlue}
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
            getDefaultValue={() => this.props.address}
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
                color: colors.cookoonBlue
              }
            }}
            currentLocation
            currentLocationLabel="Ma position"
            nearbyPlacesAPI="GoogleReverseGeocoding"
            enablePoweredByContainer={false}
            debounce={200}
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
  }
});

function mapStateToProps(state) {
  return { address: state.cookoons.search.address };
}

export default connect(mapStateToProps, { setAddress, fetchCookoons })(
  ButtonAddress
);
