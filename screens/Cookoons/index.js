import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

import colors from 'constants/colors';
import Banner from 'assets/images/banner.jpg';

import { fetchCookoons, selectCookoon } from 'redux/modules/cookoons';
import CookoonSearch from './components/CookoonSearch';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Recherche',
    header: null
  };

  onButtonPress(cookoon) {
    this.props.selectCookoon(cookoon);
    this.props.navigation.navigate('CookoonsShow', { name: cookoon.name });
  }

  renderCookoonList() {
    return (
      <View>
        {this.props.cookoons.map(cookoon => (
          <Card
            key={cookoon.id}
            title={cookoon.name}
            image={{ uri: cookoon.photos[0].url }}
          >
            <Text style={{ marginBottom: 10 }}>{cookoon.description}</Text>
            <Button
              icon={{ name: 'event' }}
              backgroundColor="#03A9F4"
              fontFamily="Lato"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="Voir"
              onPress={() => this.onButtonPress(cookoon)}
            />
          </Card>
        ))}
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Banner} style={styles.welcomeImage} />
        <CookoonSearch />
        <Button
          title="Afficher les Cookoons"
          onPress={this.props.fetchCookoons}
        />
        {this.renderCookoonList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream
  },
  welcomeImage: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover'
  }
});

function mapStateToProps(state) {
  return { cookoons: state.cookoons.index };
}

export default connect(mapStateToProps, { fetchCookoons, selectCookoon })(Home);
