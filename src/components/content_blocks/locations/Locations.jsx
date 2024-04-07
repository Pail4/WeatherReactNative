import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {styles} from '../../../styles/styles';

export function Locations(props) {
  const {likedCities} = props;

  return (
    <View style={styles.locations}>
      <View style={styles.locations__block_name}>
        <Text>Added locations:</Text>
      </View>
      <View style={styles.locations__locations_list}>
        <View type="none" className="locations-ul">
          {likedCities}
        </View>
      </View>
    </View>
  );
}

export function LikedLocation(props) {
  const {value, removeCity, chooseCity} = props;

  const deleteCity = function () {
    removeCity(value);
  };

  const handleCityClick = function () {
    chooseCity(value);
  };

  return (
    <View>
      <TextInput
        type="button"
        style={styles.locations__locations_list_li__liked_location}
        className="liked-location"
        value={value}
        onClick={handleCityClick}
      />
      <Button
        style={styles.locations__locations_list_li__delete_location}
        onPress={deleteCity}
      />
    </View>
  );
}
