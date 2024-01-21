import { fetchWeatherApi } from 'openmeteo';

import getWeatherCondition from './getWeatherCondition';

const getCurrentWeather = async () => {
  const params = {
    "latitude": 43.65,
    "longitude": -79.34,
    "current": ["temperature_2m", "weather_code"]
  };

  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current()!;

  const weatherData = { 
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000).toLocaleString(),
      temperature2m: Math.round(current.variables(0)!.value()),
      weatherCondition: getWeatherCondition(current.variables(1)!.value()),
  };

  return weatherData;
}

export default getCurrentWeather;