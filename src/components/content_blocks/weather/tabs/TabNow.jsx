import React from 'react';

import {WeatherImg, LocationName, Temp} from './elements/elements';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from '../../../../styles/styles';
import {IText} from '../../../IText/IText';

export function TabNow(props) {
  const {isActive, params, onLikeClick} = props;
  const {cityName, temperature, weatherIcon, weather, isLiked} = params;

  const likeButtonImage = require('../../../../img/like.png');
  const likeButtonActiveImage = require('../../../../img/like_active.png');

  return (
    isActive && (
      <View style={styles.tab_now} id="tab01">
        <View style={styles.tab_now__temperature} className="temperature">
          <Temp
            style={{fontSize: 35, fontWeight: 'bold', paddingTop: 10}}
            value={temperature}
          />
        </View>
        <View style={styles.tab_now__img_wrap} className="img-wrap">
          <WeatherImg src={weatherIcon} alt={weather} />
        </View>
        <View style={styles.tab_now__bottom} className="bottom">
          <IText style={{width: 30}} />
          <LocationName value={cityName} />
          <TouchableOpacity
            style={styles.tab_now_likeBtn}
            type="button"
            name="like"
            // className={'like-btn' + ' active'.repeat(isLiked)}
            id="likeBtn"
            onPress={() => {
              onLikeClick(cityName);
            }}>
            <Image
              style={styles.tab_now_likeBtnImg}
              source={isLiked ? likeButtonActiveImage : likeButtonImage}
              alt="like"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}
