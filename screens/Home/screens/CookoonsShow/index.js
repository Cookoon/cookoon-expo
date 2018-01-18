import React, { Component } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

class CookoonsShow extends Component {
  render() {
    const { selectedCookoon } = this.props;
    return (
      <ScrollView>
        <Card
          key={selectedCookoon.id}
          title={selectedCookoon.name}
          image={{ uri: selectedCookoon.photos[0].url }}
        >
          <Text style={{ marginBottom: 10 }}>
            Ce Cookoon de {selectedCookoon.surface} est idéal pour{' '}
            {selectedCookoon.capacity}. Il est situé au{' '}
            {selectedCookoon.address}.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            {selectedCookoon.category} - {selectedCookoon.description}
          </Text>
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
            title={`Réserver pour ${selectedCookoon.price}/h`}
          />
        </Card>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCookoon: state.selectedCookoon };
}

export default connect(mapStateToProps)(CookoonsShow);
