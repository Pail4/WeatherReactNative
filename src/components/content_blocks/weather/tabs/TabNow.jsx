import React from 'react';

import {WeatherImg, LocationName, Temp} from './elements/elements';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from '../../../../styles/styles';
import {IText} from '../../../IText/IText';

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
          <TouchableOpacity
            type="button"
            name="like"
            // className={'like-btn' + ' active'.repeat(isLiked)}
            id="likeBtn"
            onPress={() => {
              onLikeClick(cityName);
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={require('../../../../img/like_active.svg')}
              alt="img"
            />
            <IText>HI</IText>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}
