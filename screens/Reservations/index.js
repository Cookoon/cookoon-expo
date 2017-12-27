import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Reservations extends Component {
  static navigationOptions = {
    tabBarLabel: 'Réservations',
    title: 'Mes réservations'
  };

  renderSearch() {
    const {
      address,
      people,
      formattedDateTime,
      duration
    } = this.props.cookoonSearch;

    if (address && formattedDateTime) {
      return (
        <Text style={styles.getStartedText}>
          Vous cherchez un Cookoon à {address} pour {people} personnes, le{' '}
          {formattedDateTime} pendant {duration} heures.
        </Text>
      );
    }

    return (
      <Text style={styles.getStartedText}>
        Vous n'avez pas de recherche en cours, faites-en une dans l'onglet
        Recherche.
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Retrouvez toutes vos réservations.
            </Text>

            {this.renderSearch()}
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    marginBottom: 20,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  }
});

function mapStateToProps(state) {
  return { cookoonSearch: state.cookoonSearch };
}

export default connect(mapStateToProps)(Reservations);
