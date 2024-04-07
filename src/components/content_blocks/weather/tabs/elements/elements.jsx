/* eslint-disable eqeqeq */
/* esTextnt-disable eqeqeq */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../../../../styles/styles';

export function ParamsList(props) {
  const {show, ViewClass} = props;

  return (
    <View style={ViewClass} type="none">
      {show?.temperature != undefined && (
        <Text>
          <Text>Temperature: </Text>
          <Text style={styles.tab_now__temperature} className="temp grad">
            {show.temperature}
          </Text>
        </Text>
      )}
      {show?.feelsLike != undefined && (
        <Text>
          <Text>Feels like:</Text>
          <Text className="feels-Textke grad">{show.feelsLike}</Text>
        </Text>
      )}
      {show?.weather != undefined && (
        <Text>
          <Text>Weather: </Text>
          <Text className="cur-weather" />
          <Text>{show.weather}</Text>
        </Text>
      )}
      {show?.sunrise != undefined && (
        <Text>
          <Text>Sunrise: </Text>
          <Text className="sunrise" />
          <Text>{show.sunrise}</Text>
        </Text>
      )}
      {show?.sunset != undefined && (
        <Text>
          <Text>Sunset: </Text>
          <Text className="sunset">{show.sunset}</Text>
        </Text>
      )}
    </View>
  );
}

export function WeatherImg(props) {
  const {src, alt} = props;
  return (
    <Image
      style={styles.tab_now__weather_img}
      // className="weather-img"
      src={src}
      alt={alt}
    />
  );
}

export function LocationName(props) {
  return (
    <Text
      style={styles.tab_now__bottom__location_name}
      className="location-name">
      {props.value}
    </Text>
  );
}

export function Temp(props) {
  return <Text className="temp grad">{props.value}</Text>;
}
