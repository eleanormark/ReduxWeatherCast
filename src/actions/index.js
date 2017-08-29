import axios from "axios";

const API_KEY = 'cf50b5bf9f73c662e3194661211919ed';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request value in Action-Creator fetchWeater', request);
  
  // request is a promise
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}