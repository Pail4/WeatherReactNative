import React from 'react';

import {WeatherImg} from './elements/elements';
import {ScrollView, StyleSheet, View} from 'react-native';
import {styles} from '../../../../styles/styles';
import {IText} from '../../../IText/IText';

export function TabForecast(props) {
  const {isActive, cityName, blockList} = props;

  return (
    isActive && (
      <View style={styles.tab_forecast}>
        <View style={styles.tab_details__location_name}>
          <IText>{cityName || 'oaoaoa'}</IText>
        </View>
        <ScrollView style={styles.tab_forecast_list}>{blockList}</ScrollView>
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
        <View>
          <IText>{date}</IText>
        </View>
        <View>
          <IText>{time}</IText>
        </View>
      </View>
      <View style={styles.tab_forecast__time_block_bot}>
        <View style={styles.params}>
          <View type="none">
            <IText>
              <IText>Temperature: </IText>
              <IText>{temperature}</IText>
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
          <WeatherImg
            src={weatherIcon}
            alt={weather}
            style={{width: 40, height: 40, padding: 0, margin: 0}}
          />
        </View>
      </View>
    </View>
  );
}
