// make api call to open-meteo to retrieve weather information for the past 5 days. Then process the data to form an Array of Objects. Each objects contain weather information for one day.

import { fetchWeatherApi } from 'openmeteo';
import getWeatherCondition from './getWeatherCondition';
import {HistoricalDaily} from '../../types';




const getHistoricalWeather = async (): Promise<HistoricalDaily[]> => {
  const params = {
    "latitude": 43.65,
    "longitude": -79.34,
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    "past_days": 5,
    "forecast_days": 0
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params); 

  if(!responses || responses.length === 0){
    throw new Error("No data received from the weather API");
  }

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const daily = response.daily()!;

  // Process response from API call to form an object that contains useful information

  const weatherData = {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!, 
  };
  
  // Map the weatherData object into an Array of objects. Each object represents weather data of one day.

  const historicalWeatherData = weatherData.time.slice(0,5).map((time,i) => ({
    date:time.toLocaleDateString(),
    maxTemperature: Math.round(weatherData.temperature2mMax[i]),
    minTemperature: Math.round(weatherData.temperature2mMin[i]),
    weatherCondition: getWeatherCondition(weatherData.weatherCode[i]),
  }));

  return historicalWeatherData

}
  


export default getHistoricalWeather;
