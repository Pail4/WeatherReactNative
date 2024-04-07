import React from 'react';

import {WeatherImg, LocationName, Temp} from './elements/elements';
import {StyleSheet, TextInput, View} from 'react-native';
import {styles} from '../../../../styles/styles';

export function TabNow(props) {
  const {isActive, params, onLikeClick} = props;
  const {cityName, temperature, weatherIcon, weather, isLiked} = params;

  return (
    isActive && (
      <View style={styles.tab_now} id="tab01">
        <View style={styles.tab_now__temperature} className="temperature">
          <Temp value={temperature} />
        </View>
        <View style={styles.tab_now__img_wrap} className="img-wrap">
          <WeatherImg src={weatherIcon} alt={weather} />
        </View>
        <View style={styles.tab_now__bottom} className="bottom">
          <LocationName value={cityName} />
          <TextInput
            type="button"
            name="like"
            style={StyleSheet.compose(
              styles.tab_now__bottom__like_btn,
              styles.tab_now_active,
            )}
            className={'like-btn' + ' active'.repeat(isLiked)}
            id="likeBtn"
            onPressIn={() => {
              onLikeClick(cityName);
            }}
          />
        </View>
      </View>
    )
  );
}
