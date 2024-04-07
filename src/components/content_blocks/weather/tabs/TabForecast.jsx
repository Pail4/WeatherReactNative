import React from 'react';

import {WeatherImg} from './elements/elements';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../../../styles/styles';

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
          <Text>{cityName || 'oaoaoa'}</Text>
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
          <Text>{date}</Text>
        </View>
        <View style={styles.tab_forecast__time}>
          <Text>{time}</Text>
        </View>
      </View>
      <View style={styles.tab_forecast__time_block_bot}>
        <View style={styles.params}>
          <View type="none">
            <Text>
              <Text>Temperature: </Text>
              <Text style={styles.tab_now__temperature}>{temperature}</Text>
            </Text>
            <Text>
              <Text>Feels like: </Text>
              <Text style={styles.feel_like}>{feelsLike}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.tab_forecast__time_block_weather}>
          <View style={styles.tab_forecast__time}>
            <Text>{weather}</Text>
          </View>
          <WeatherImg src={weatherIcon} alt={weather} />
        </View>
      </View>
    </View>
  );
}
