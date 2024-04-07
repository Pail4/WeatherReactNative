import '../styles/styles';
import React, {useEffect, useState} from 'react';

import {SearchForm} from './search_form/SearchForm';
import {Weather} from './content_blocks/weather/Weather';
import {Locations, LikedLocation} from './content_blocks/locations/Locations';

import {defaultWeather} from './storage';
import {getWeather} from './API';
import {getParsedWeather, getForecastList} from './helpers';
import {View} from 'react-native';
import {styles} from '../styles/styles';

function App() {
  const [storage, setStorage] = useState(defaultWeather);
  const [forecast, setForecast] = useState([]);

  // useEffect(() => {
  //   weatherNow.get(createCity).then(value => setStorage(value));
  // });

  useEffect(function saveStorage() {
    getWeather('Пермь', 'weatherNow').then(newWeather => {
      const newWeatherNow = getParsedWeather(newWeather, 'Пермь');
      console.log(newWeatherNow);
      setStorage({...defaultWeather, ...newWeatherNow});
    });
  }, []);

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
