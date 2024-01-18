"use client";

import React, { useState, useEffect } from "react";

import useWeather from "../hooks/useWeather"
import { getTimeStamp } from "../helpers/index.js";

import getHistoricalWeather from "@/helpers/weather/getHistoricalWeather";

import SavedWeather from "./SavedWeather";

const CurrentWeather = () => {

  interface WeatherData {
    time: Date | null;
    temperature2m: number | null;
    weatherCode: number | null;
  }


  const [weather, setWeather] = useState<WeatherData>({
    'time': null,
    'temperature2m': null,
    'weatherCode': null

  })

  const [timeStamp, setTimeStamp] = useState<string>(getTimeStamp());
  const [play, setPlay] = useState<boolean>(true);
  const [displayPast, setDisplayPast] = useState<boolean>(false);
  const [pastData,setPastData] = useState<WeatherData[]>([]);

  useEffect(() => {

    getHistoricalWeather();
    let interval;

    const fetchWeather = async () => {
      try {
        const latestWeather = await useWeather();
        setWeather(latestWeather);
        setTimeStamp(getTimeStamp());
      } catch (error) {
        console.log(error);
      }
    }

    if (play) {
      fetchWeather();
      interval = setInterval(fetchWeather, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };

  }, [play]);

  const lastMeasured = weather.time ? weather.time.toLocaleString() : "";


  const saveWeatherData = () => {
    const savedData = JSON.parse(localStorage.getItem('savedWeatherData')) || [];
    savedData.push(weather);

    if (savedData.length > 5){
      savedData.shift();
    }

    localStorage.setItem('savedWeatherData', JSON.stringify(savedData));
  }

  

  const loadSavedWeatherData = () => {
    setDisplayPast(!displayPast);
    const savedData = JSON.parse(localStorage.getItem('savedWeatherData')) || [];
    setPastData(savedData);
  }

  const clearSavedWeatherData = () => {
    localStorage.removeItem('savedWeatherData');
    setPastData([]);

  }


  return (
    <>
      <p>{weather.temperature2m}</p>
      <p>{lastMeasured}</p>
      <p>{weather.weatherCode}</p>
      <p>{timeStamp}</p>
      <button onClick={() => setPlay(!play)}>{play ? "Pause" : "Play"}</button>
      <button onClick = {saveWeatherData}>Store</button>
      <button onClick = {loadSavedWeatherData}>Past Stored</button>
      <button onClick = {clearSavedWeatherData}>Clear Saved</button>
      {displayPast && 
       <SavedWeather savedData={pastData}/>}
     

    </>
  )

}

export default CurrentWeather;