import React from 'react';
import {Button, TextInput, TouchableOpacity, View} from 'react-native';
import {ButtonColor, styles} from '../../../styles/styles';
import {IText} from '../../IText/IText';

export function Locations(props) {
  const {likedCities} = props;

  return (
    <View style={styles.locations}>
      <View style={styles.locations__block_name}>
        <IText>Added locations:</IText>
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
    <TouchableOpacity onPress={handleCityClick} style={styles.likedCityRow}>
      <IText>{value}</IText>
      <Button
        style={styles.locations__locations_list_li__delete_location}
        color={ButtonColor}
        title="delete"
        onPress={deleteCity}
      />
    </TouchableOpacity>
  );
}
