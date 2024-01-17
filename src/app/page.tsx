
"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import useWeather from "../hooks/useWeather"


interface WeatherData {
  time: Date | null;
  temperature2m: number | null;
  weatherCode: number | null;
}


const Weather = () => {
  const [weather, setWeather] = useState<WeatherData>({
    'time':null,
    'temperature2m':null,
    'weatherCode': null

  })
  useEffect(() => {
    const fetchWeather = async() => {
      try{
        const latestWeather = await useWeather();
        setWeather(latestWeather);
      } catch(error){
        console.log(error);
      }
    }
    fetchWeather()
    
    // const interval = setInterval(fetchWeather, 5000);

    // console.log(weather);

    // return () => clearInterval(interval);
  }, []);
  console.log(weather);
  let time = "haha";
  if(weather.time){
    time = weather.time.toDateString();
  }
  console.log(time);

  

  return(
    <>
      <p>{weather.temperature2m}</p>
      <p>{time}</p>
      <p>{weather.weatherCode}</p>
    </>
  )
  
}

export default function Home() {

  

  
  // const [timestamp, setTimestamp] = useState(Date.now());

  

 

  return (
    <main>
      <Weather/>
   
     
    </main>
  )
}
