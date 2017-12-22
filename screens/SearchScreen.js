import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { SearchBar, Slider } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Recherche',
    header: null
  };

  state = {
    address: '',
    date: new Date(),
    duration: 6,
    isDateTimePickerVisible: false
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({ date });
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/banner.jpg')}
            style={styles.welcomeImage}
          />
        </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <SearchBar
            lightTheme
            round
            clearIcon
            placeholder="Paris"
            onChangeText={address => this.setState({ address })}
            onClearText={() => this.setState({ address: '' })}
            value={this.state.address}
          />

          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Text>Choisir Date</Text>
          </TouchableOpacity>
          <DateTimePicker
            mode="datetime"
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
          <View
            style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
          >
            <Slider
              minimumValue={1}
              maximumValue={8}
              step={1}
              value={this.state.duration}
              onValueChange={duration => this.setState({ duration })}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Je cherche un cookoon à {this.state.address || 'Paris'} le
              {` ${this.state.date.getDate()}/${this.state.date.getMonth() +
                1} à ${this.state.date.getHours()}h${this.state.date.getMinutes()} `}
              pour {this.state.duration} heures
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center'
  },
  welcomeImage: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  }
});
