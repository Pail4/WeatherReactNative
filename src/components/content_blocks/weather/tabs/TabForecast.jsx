import React from 'react';

import {WeatherImg} from './elements/elements';
import {StyleSheet, View} from 'react-native';
import {styles} from '../../../../styles/styles';
import {IText} from '../../../IText/IText';

export function TabForecast(props) {
  const {isActive, cityName, blockList} = props;

  return (
    isActive && (
      <View
        style={StyleSheet.compose(
          styles.tab,
          styles.tab_forecast,
          styles.tab_forecast_active,
        )}
        className="tab tab-forecast active"
        id="tab03">
        <View
          style={styles.tab_details__location_name}
          className="location-name">
          <IText>{cityName || 'oaoaoa'}</IText>
        </View>
        <View
          style={styles.tab_forecast__time_block}
          className="time-block-Textst">
          {blockList}
        </View>
      </View>
    )
  );
}

export function TimeBlock(props) {
  const {date, time, params} = props;
  const {weatherIcon, weather, temperature, feelsLike} = params;

  return (
    <View style={styles.tab_forecast__time_block}>
      <View style={styles.tab_forecast__time_block_top}>
        <View style={styles.date}>
          <IText>{date}</IText>
        </View>
        <View style={styles.tab_forecast__time}>
          <IText>{time}</IText>
        </View>
      </View>
      <View style={styles.tab_forecast__time_block_bot}>
        <View style={styles.params}>
          <View type="none">
            <IText>
              <IText>Temperature: </IText>
              <IText style={styles.tab_now__temperature}>{temperature}</IText>
            </IText>
            <IText>
              <IText>Feels like: </IText>
              <IText style={styles.feel_like}>{feelsLike}</IText>
            </IText>
          </View>
        </View>
        <View style={styles.tab_forecast__time_block_weather}>
          <View style={styles.tab_forecast__time}>
            <IText>{weather}</IText>
          </View>
          <WeatherImg src={weatherIcon} alt={weather} />
        </View>
      </View>
    </View>
  );
}
