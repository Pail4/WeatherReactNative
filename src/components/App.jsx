import '../styles/styles';
import React, {useEffect, useState} from 'react';

import {SearchForm} from './search_form/SearchForm';
import {Weather} from './content_blocks/weather/Weather';
import {Locations, LikedLocation} from './content_blocks/locations/Locations';

import {defaultWeather, weatherNow} from './storage';
import {getWeather} from './API';
import {getParsedWeather, getForecastList} from './helpers';
import {View} from 'react-native';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [storage, setStorage] = useState(defaultWeather);
  const [forecast, setForecast] = useState([]);

  useEffect(function initStorage() {
    console.log('AFTER STORAGE');
    AsyncStorage.getItem('myStorage', res => console.log('res', res))
      .then(stor => {
        const data = {...JSON.parse(stor)};
        data.likedCities = data.likedCities.map(cityName =>
          createCity(cityName),
        );
        setStorage(data);
      })
      .catch(err => console.log('!!!!', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(function saveStorage() {
    try {
      const _storage = {};
      Object.assign(_storage, storage);
      _storage.likedCities = _storage.likedCities.map(city => {
        return city.props.value;
      });
      const data = JSON.stringify(_storage);
      AsyncStorage.setItem('myStorage', data);
    } catch (err) {
      console.log(err);
    }
  });

  async function setWeather(cityName) {
    const _newWeatherNow = await getWeather(cityName, 'weatherNow');
    const newWeatherNow = getParsedWeather(_newWeatherNow, cityName);
    console.log(newWeatherNow);

    setStorage(_storage => {
      newWeatherNow.likedCities = _storage.likedCities;
      newWeatherNow.isLiked = isCityInList(cityName, _storage.likedCities);
      return newWeatherNow;
    });

    const _newForecast = await getWeather(cityName, 'forecast');
    const newForecast = getForecastList(_newForecast, cityName);
    setForecast(newForecast);
  }

  function isCityInList(cityName, list) {
    return !!list.find(city => {
      return city.props.value === cityName;
    });
  }

  function handleLikeClick(cityName) {
    if (isCityInList(cityName, storage.likedCities)) {
      removeCity(cityName);
    } else {
      addCity(cityName);
    }
  }

  function removeCity(cityName) {
    setStorage(_storage => {
      _storage.likedCities = _storage.likedCities.filter(city => {
        return city.props.value !== cityName;
      });
      const newStorage = {};
      Object.assign(newStorage, _storage);
      return newStorage;
    });
  }

  function addCity(cityName) {
    setStorage(_storage => {
      const arr = _storage.likedCities.slice();
      arr.push(createCity(cityName));
      const newStorage = {};
      Object.assign(newStorage, _storage);
      newStorage.likedCities = arr;
      newStorage.isLiked = true;
      return newStorage;
    });
  }

  function createCity(cityName) {
    return (
      <LikedLocation
        key={cityName}
        value={cityName}
        removeCity={removeCity}
        chooseCity={setWeather}
      />
    );
  }

  return (
    <View style={styles.wrapper} className="wrapper">
      <SearchForm onSubmit={setWeather} />

      <View style={styles.blocks}>
        <Weather
          params={storage}
          blockList={forecast}
          onLikeClick={handleLikeClick}
        />
        <Locations likedCities={storage.likedCities} />
      </View>
    </View>
  );
}

export default App;
