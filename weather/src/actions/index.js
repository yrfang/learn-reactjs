import axios from 'axios';

const API_KEY = '10b96a555cb951f83ebe6df77799ca60';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
