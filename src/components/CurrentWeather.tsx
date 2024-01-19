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
      interval = setInterval(fetchWeather, 60000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };

  }, [play]);

  const lastMeasured = weather.time ? weather.time.toLocaleString() : "";

  
  const saveWeatherData = async() => {
    try{
      const response = await fetch('/api/weather',{
        method: 'POST',
        body:JSON.stringify({...weather,savedAt: new Date().toLocaleString()})
      });
      const data = response.json();
      console.log("Successfully Saved Data", data);
      return(data);
    } catch(err){
      console.error('Error', err);
    }
  }

  const loadSavedWeatherData = async() => {
    try{
      const response = await fetch('/api/weather');
      const data = response.json();
      console.log('Successfully Loaded Latest Saved Data:', data);
      return (data);
    } catch(err){
      console.error('Error:',err);
    }
  
  }

  const clearSavedWeatherData = async() => {
    try{
      const response = await fetch('/api/weather',{
        method:'DELETE'
      });
      const data = response.json();
      console.log('Successfully Deleted Saved Weather Data:', data);
      setPastData([]);

    } catch(err) {
      console.error('Error:',err);
    }
  }


  return (
    <div className="space-y-2">
      <p className="text-lg md:text-3xl font-bold text-blue-600">{Math.round(weather.temperature2m)}°C</p>
      <p className="font-mono text-sm">{weather.weatherCode}</p>
      <p className="font-mono text-sm">Last Measured At:{lastMeasured}</p>
      <p className="font-mono text-sm">Last Requested Made At:{timeStamp}</p>
      <div className="flex flex-wrap gap-2">
        <button className="bg-gray-700 text-white px-4 py-2 rounded"
         onClick={() => setPlay(!play)}>{play ? "Pause" : "Play"}
        </button>
      </div>
    
      <button className="bg-green-500 text-white px-4 py-2 rounded" 
        onClick = {saveWeatherData}>Store</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded"onClick = {loadSavedWeatherData}>Past Stored</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded"onClick = {clearSavedWeatherData}>Clear Saved</button>
      {displayPast && 
       <SavedWeather savedData={pastData}/>}
    </div>
  )

}

export default CurrentWeather;



  // const saveWeatherData = () => {
  //   const savedData = JSON.parse(localStorage.getItem('savedWeatherData')) || [];
  //   savedData.push({...weather,savedAt:new Date().toLocaleString()});

  //   if (savedData.length > 5){
  //     savedData.shift();
  //   }

  //   localStorage.setItem('savedWeatherData', JSON.stringify(savedData));
  // }


    // const loadSavedWeatherData = () => {
  //   setDisplayPast(!displayPast);
  //   const savedData = JSON.parse(localStorage.getItem('savedWeatherData')) || [];
  //   setPastData(savedData);
  // }