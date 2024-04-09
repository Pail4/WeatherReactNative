import AsyncStorage from '@react-native-async-storage/async-storage';

export const defaultWeather = {
  cityName: 'City',
  temperature: '',
  feelsLike: '',
  weather: '',
  weatherIcon: '',
  sunrise: '',
  sunset: '',
  isLiked: false,
  likedCities: [],
};

export const weatherNow = {
  ...defaultWeather,
  async get(createCity) {
    try {
      const fetchedData = await AsyncStorage.getItem('myStorage');
      let data = JSON.parse(fetchedData);
      data.likedCities = data.likedCities.map(createCity);
      return data || this;
    } catch (error) {
      console.log(error);
      return this;
    }
  },
};
