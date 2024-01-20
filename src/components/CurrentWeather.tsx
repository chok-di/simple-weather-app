"use client";

import React, { useState, useEffect } from "react";
import SavedWeather from "./SavedWeather";

import useWeather from "../hooks/useWeather"
import {saveWeatherData, loadSavedWeatherData, clearSavedWeatherData} from "../helpers/weather/handleWeatherDb";

import { getTimeStamp } from "../helpers/index.js";



import {CurrentWeatherData} from "../types";

const CurrentWeather = () => {


  const [weather, setWeather] = useState<CurrentWeatherData>({
    'time': null,
    'temperature2m': null,
    'weatherCode': null
  })

  const [timeStamp, setTimeStamp] = useState<string>(getTimeStamp());
  const [play, setPlay] = useState<boolean>(true);
  const [displayPast, setDisplayPast] = useState<boolean>(false);
  const [pastData,setPastData] = useState<CurrentWeatherData[]>([]);

  useEffect(() => {

    const fetchWeather = async () => {
      if(!play) return;
      try {
        const latestWeather = await useWeather();
        setWeather(latestWeather);
        setTimeStamp(getTimeStamp());
      } catch (err) {
        console.log("Failed to fetch current weather information", err);
      }
    }

    fetchWeather();
    const interval = play ? setInterval(fetchWeather, 1000) : null;
    return () => {if(interval) clearInterval(interval)}

  }, [play]);

  const handleClickPastStored = async() => {
    try{
      const savedWeatherData = await loadSavedWeatherData();
      console.log(savedWeatherData);
      setPastData(savedWeatherData.data);
      setDisplayPast(true);
    } catch(err){
      console.error('API call failed. Failed to load saved weather data', err);
    }
  }

  

  const lastMeasured = weather.time ? weather.time.toLocaleString() : "";



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
        onClick = {()=>{saveWeatherData(weather)}}>Store</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded"onClick = {handleClickPastStored}>Past Stored</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded"onClick = {clearSavedWeatherData}>Clear Saved</button>
       {displayPast && <SavedWeather savedData={pastData}/>}
       
    </div>
  )

}

export default CurrentWeather;


  // Below is legacy code for saving data with localStorage
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