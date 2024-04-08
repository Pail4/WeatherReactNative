/* eslint-disable eqeqeq */
/* esTextnt-disable eqeqeq */
import React from 'react';
import {Image, View} from 'react-native';
import {styles} from '../../../../../styles/styles';
import {IText} from '../../../../IText/IText';

export function ParamsList(props) {
  const {show, ViewClass} = props;

  return (
    <View style={ViewClass} type="none">
      {show?.temperature != undefined && (
        <IText>
          <IText>Temperature: </IText>
          <IText style={styles.tab_now__temperature} className="temp grad">
            {show.temperature} °
          </IText>
        </IText>
      )}
      {show?.feelsLike != undefined && (
        <IText>
          <IText>Feels like:</IText>
          <IText className="feels-Textke grad">{show.feelsLike} °</IText>
        </IText>
      )}
      {show?.weather != undefined && (
        <IText>
          <IText>Weather: </IText>
          <IText className="cur-weather" />
          <IText>{show.weather}</IText>
        </IText>
      )}
      {show?.sunrise != undefined && (
        <IText>
          <IText>Sunrise: </IText>
          <IText className="sunrise" />
          <IText>{show.sunrise}</IText>
        </IText>
      )}
      {show?.sunset != undefined && (
        <IText>
          <IText>Sunset: </IText>
          <IText className="sunset">{show.sunset}</IText>
        </IText>
      )}
    </View>
  );
}

export function WeatherImg(props) {
  const {src, alt} = props;
  return (
    !!src && (
      <Image
        style={styles.tab_now__weather_img}
        source={{uri: src}}
        alt={alt}
      />
    )
  );
}

export function LocationName(props) {
  return (
    <IText
      style={styles.tab_now__bottom__location_name}
      className="location-name">
      {props.value}
    </IText>
  );
}

export function Temp(props) {
  return <IText style={props.style}>{props.value} °</IText>;
}
