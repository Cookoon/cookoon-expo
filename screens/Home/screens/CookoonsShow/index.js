import React, { Component } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import Swiper from 'react-native-swiper';

class CookoonsShow extends Component {
  renderSlides(photos) {
    return photos.map((photo, i) => (
      <View
        key={i}
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            flex: 1
          }}
          source={{ uri: photo.url }}
        />
      </View>
    ));
  }

  render() {
    const { selectedCookoon } = this.props;
    return (
      <ScrollView>
        <Swiper height={240} loop autoplay autoplayTimeout={5}>
          {this.renderSlides(selectedCookoon.photos)}
        </Swiper>

        <Card key={selectedCookoon.id} title={selectedCookoon.name}>
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
