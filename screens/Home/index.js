import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';

import Banner from '../../assets/images/banner.jpg';

import { fetchCookoons } from './duck';
import CookoonSearch from './components/CookoonSearch';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Recherche',
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Banner} style={styles.welcomeImage} />
        <CookoonSearch />

        <Button
          title="Afficher les Cookoons"
          onPress={this.props.fetchCookoons}
        />
        <List>
          {this.props.cookoons.map(cookoon => (
            <ListItem key={cookoon.id} title={cookoon.name} />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  welcomeImage: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover'
  }
});

function mapStateToProps(state) {
  return { cookoons: state.cookoons };
}

export default connect(mapStateToProps, { fetchCookoons })(Home);
