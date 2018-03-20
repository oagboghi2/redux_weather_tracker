const API_KEY = '719d542dd83abf6dd26c6d9976bc1208';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&mode=json`
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
